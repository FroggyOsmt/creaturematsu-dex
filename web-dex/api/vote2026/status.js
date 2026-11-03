const {
  REDIS_KEYS,
  callRedisTransaction,
  handleEndpointError,
  hashLocalId,
  isValidLocalId,
  isVote2026ManuallyClosed,
  isoFromMilliseconds,
  parseJsonBody,
  sendJson
} = require("./_shared");

module.exports = async function vote2026Status(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  if (isVote2026ManuallyClosed()) {
    sendJson(response, 200, {
      ok: true,
      hasVoted: false,
      closed: true,
      endsAt: null
    });
    return;
  }

  try {
    const payload = await parseJsonBody(request);
    const localId = String(payload?.localId || "");
    if (!isValidLocalId(localId)) {
      sendJson(response, 400, { ok: false, message: "Invalid local voting ID." });
      return;
    }

    const voterHash = hashLocalId(localId);
    const [membership, meta] = await callRedisTransaction([
      ["SISMEMBER", REDIS_KEYS.voters, voterHash],
      ["HMGET", REDIS_KEYS.meta, "endsAtMs"]
    ]);
    const hasVoted = Number(membership) === 1;
    const endsAtMs = Array.isArray(meta) ? meta[0] : null;

    sendJson(response, 200, {
      ok: true,
      hasVoted,
      closed: false,
      endsAt: hasVoted ? isoFromMilliseconds(endsAtMs) : null
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      sendJson(response, 400, { ok: false, message: "Invalid JSON." });
      return;
    }
    handleEndpointError(response, error);
  }
};
