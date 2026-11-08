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
  isVote2026ManuallyClosed,
  isoFromMilliseconds,
  sendJson
} = require("./_shared");

function classifyScores(scores) {
  const top = [];
  const ties = [];
  const remaining = [];
  let topClosed = false;

  for (let index = 0; index < scores.length;) {
    const points = scores[index].points;
    let groupEnd = index + 1;
    while (groupEnd < scores.length && scores[groupEnd].points === points) groupEnd += 1;

    const position = index + 1;
    const group = scores.slice(index, groupEnd).map(entry => ({ ...entry, position }));
    if (!topClosed && top.length + group.length <= TOP_LIMIT) {
      top.push(...group);
    } else if (group.length > 1) {
      topClosed = true;
      ties.push(...group);
    } else {
      topClosed = true;
      remaining.push(group[0]);
    }
    index = groupEnd;
  }

  return { top, ties, remaining };
}

function canReadResults(request, manuallyClosed = isVote2026ManuallyClosed()) {
  return manuallyClosed || hasResultsAccess(request);
}

async function vote2026Results(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    sendJson(response, 405, { ok: false, message: "Method not allowed." });
    return;
  }

  try {
    const manuallyClosed = isVote2026ManuallyClosed();
    if (!canReadResults(request, manuallyClosed)) {
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
    const isClosed = manuallyClosed || (endsAt && now.getTime() >= Date.parse(endsAt));
    const scores = [];

    if (Array.isArray(scoreValues)) {
      for (let index = 0; index < scoreValues.length; index += 2) {
        const candidateId = String(scoreValues[index] || "");
        const points = Math.max(0, Number(scoreValues[index + 1]) || 0);
        if (/^\d{3}$/.test(candidateId)) scores.push({ candidateId, points });
      }
    }

    scores.sort((left, right) => right.points - left.points || left.candidateId.localeCompare(right.candidateId));
    const ranking = classifyScores(scores);

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
      top: ranking.top,
      ties: ranking.ties,
      remaining: ranking.remaining
    });
  } catch (error) {
    handleEndpointError(response, error);
  }
}

module.exports = vote2026Results;
module.exports.canReadResults = canReadResults;
