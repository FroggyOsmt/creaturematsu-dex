const {
  EVENT_DURATION_MS,
  EVENT_ID,
  REDIS_KEYS,
  SUBMIT_BALLOT_SCRIPT,
  callRedis,
  handleEndpointError,
  hashLocalId,
  isValidBallot,
  isValidLocalId,
  isoFromMilliseconds,
  normalizeCandidateIds,
  parseJsonBody,
  sendJson
} = require("./_shared");

module.exports = async function vote2026Ballots(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  try {
    const payload = await parseJsonBody(request);
    const localId = String(payload?.localId || "");
    const candidateIds = normalizeCandidateIds(payload?.candidateIds);

    if (!isValidLocalId(localId)) {
      sendJson(response, 400, { ok: false, message: "Invalid local voting ID." });
      return;
    }
    if (!isValidBallot(candidateIds)) {
      sendJson(response, 400, {
        ok: false,
        message: "Choose one, two, or three different creatures."
      });
      return;
    }

    const nowMs = Date.now();
    const voterHash = hashLocalId(localId);
    const result = await callRedis([
      "EVAL",
      SUBMIT_BALLOT_SCRIPT,
      3,
      REDIS_KEYS.voters,
      REDIS_KEYS.scores,
      REDIS_KEYS.meta,
      voterHash,
      nowMs,
      EVENT_DURATION_MS,
      EVENT_ID,
      ...candidateIds
    ]);

    const [state, totalBallotsValue, endsAtMs] = Array.isArray(result) ? result : [];
    const totalBallots = Math.max(0, Number(totalBallotsValue) || 0);
    const endsAt = isoFromMilliseconds(endsAtMs);

    if (state === "closed") {
      sendJson(response, 410, {
        ok: false,
        code: "voting-closed",
        message: "Voting is closed. Please wait for the final results."
      });
      return;
    }

    if (state === "already") {
      sendJson(response, 200, {
        ok: true,
        alreadyVoted: true,
        totalBallots,
        endsAt
      });
      return;
    }

    if (state !== "accepted") {
      throw new Error("Unexpected vote storage response.");
    }

    sendJson(response, 201, {
      ok: true,
      totalBallots,
      endsAt
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      sendJson(response, 400, { ok: false, message: "Invalid JSON." });
      return;
    }
    handleEndpointError(response, error);
  }
};
