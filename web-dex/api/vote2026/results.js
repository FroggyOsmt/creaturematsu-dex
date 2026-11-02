const {
  BALLOT_MAX_SIZE,
  BALLOT_MIN_SIZE,
  EVENT_DURATION_DAYS,
  EVENT_ID,
  REDIS_KEYS,
  TOP_LIMIT,
  callRedisTransaction,
  handleEndpointError,
  hasResultsAccess,
  isoFromMilliseconds,
  sendJson
} = require("./_shared");

module.exports = async function vote2026Results(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    sendJson(response, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  try {
    if (!hasResultsAccess(request)) {
      sendJson(response, 401, { ok: false, message: "Unauthorized." });
      return;
    }

    const [meta, scoreValues] = await callRedisTransaction([
      ["HMGET", REDIS_KEYS.meta, "startsAtMs", "endsAtMs", "totalBallots"],
      ["ZRANGE", REDIS_KEYS.scores, 0, -1, "WITHSCORES"]
    ]);
    const [startsAtMs, endsAtMs, totalBallotsValue] = Array.isArray(meta) ? meta : [];
    const totalBallots = Math.max(0, Number(totalBallotsValue) || 0);
    const now = new Date();
    const endsAt = isoFromMilliseconds(endsAtMs);
    const isClosed = endsAt && now.getTime() >= Date.parse(endsAt);
    const scores = [];

    if (Array.isArray(scoreValues)) {
      for (let index = 0; index < scoreValues.length; index += 2) {
        const candidateId = String(scoreValues[index] || "");
        const points = Math.max(0, Number(scoreValues[index + 1]) || 0);
        if (/^\d{3}$/.test(candidateId)) scores.push({ candidateId, points });
      }
    }

    scores.sort((left, right) => right.points - left.points || left.candidateId.localeCompare(right.candidateId));

    sendJson(response, 200, {
      meta: {
        version: 1,
        mode: isClosed ? "closed" : "live",
        eventId: EVENT_ID,
        generatedAt: now.toISOString(),
        startsAt: isoFromMilliseconds(startsAtMs),
        endsAt,
        durationDays: EVENT_DURATION_DAYS,
        ballotSize: BALLOT_MAX_SIZE,
        ballotMinSize: BALLOT_MIN_SIZE,
        ballotMaxSize: BALLOT_MAX_SIZE,
        topLimit: TOP_LIMIT,
        source: "vercel-cloud-api"
      },
      summary: {
        totalBallots,
        totalPoints: scores.reduce((total, entry) => total + entry.points, 0)
      },
      top: scores.slice(0, TOP_LIMIT).map((entry, index) => ({
        ...entry,
        position: index + 1
      }))
    });
  } catch (error) {
    handleEndpointError(response, error);
  }
};
