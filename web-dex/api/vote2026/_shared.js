const crypto = require("crypto");
const CLOSE2026_CONFIG = require("../../vote/vote2026/close2026");

const EVENT_ID = "top-favorite-creature-2026";
const EVENT_DURATION_DAYS = 7;
const EVENT_DURATION_MS = EVENT_DURATION_DAYS * 24 * 60 * 60 * 1_000;
const BALLOT_MIN_SIZE = 1;
const BALLOT_MAX_SIZE = 3;
const TOP_LIMIT = 6;
const KEY_PREFIX = "creaturematsu:vote2026";
const REDIS_KEYS = {
  voters: `${KEY_PREFIX}:voters`,
  scores: `${KEY_PREFIX}:scores`,
  meta: `${KEY_PREFIX}:meta`
};

const SUBMIT_BALLOT_SCRIPT = `
local voterHash = ARGV[1]
local nowMs = tonumber(ARGV[2])
local durationMs = tonumber(ARGV[3])
local eventId = ARGV[4]
local endsAtMs = tonumber(redis.call('HGET', KEYS[3], 'endsAtMs') or '0')
local totalBallots = tonumber(redis.call('HGET', KEYS[3], 'totalBallots') or '0')

if endsAtMs > 0 and nowMs >= endsAtMs then
  return {'closed', tostring(totalBallots), tostring(endsAtMs)}
end

if redis.call('SISMEMBER', KEYS[1], voterHash) == 1 then
  return {'already', tostring(totalBallots), tostring(endsAtMs)}
end

if endsAtMs == 0 then
  endsAtMs = nowMs + durationMs
  redis.call(
    'HSET',
    KEYS[3],
    'eventId', eventId,
    'startsAtMs', tostring(nowMs),
    'endsAtMs', tostring(endsAtMs),
    'totalBallots', '0'
  )
end

redis.call('SADD', KEYS[1], voterHash)
for index = 5, #ARGV do
  redis.call('ZINCRBY', KEYS[2], 1, ARGV[index])
end
totalBallots = redis.call('HINCRBY', KEYS[3], 'totalBallots', 1)

return {'accepted', tostring(totalBallots), tostring(endsAtMs)}
`;

class ConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigurationError";
  }
}

function getRedisConfiguration(environment = process.env) {
  const url = String(
    environment.VOTE2026_REDIS_REST_URL ||
    environment.UPSTASH_REDIS_REST_KV_REST_API_URL ||
    environment.UPSTASH_REDIS_REST_URL ||
    environment.KV_REST_API_URL ||
    ""
  ).replace(/\/+$/, "");
  const token = String(
    environment.VOTE2026_REDIS_REST_TOKEN ||
    environment.UPSTASH_REDIS_REST_KV_REST_API_TOKEN ||
    environment.UPSTASH_REDIS_REST_TOKEN ||
    environment.KV_REST_API_TOKEN ||
    ""
  );

  if (!url || !token) {
    throw new ConfigurationError("Vote storage is not configured.");
  }
  return { url, token };
}

function getHashSecret(environment = process.env) {
  const secret = String(environment.VOTE2026_HASH_SECRET || "");
  if (secret.length < 32) {
    throw new ConfigurationError("Vote hashing is not configured.");
  }
  return secret;
}

function getResultsToken(environment = process.env) {
  const token = String(environment.VOTE2026_RESULTS_TOKEN || "");
  if (token.length < 32) {
    throw new ConfigurationError("Private vote results access is not configured.");
  }
  return token;
}

function isCandidateId(value) {
  const id = String(value || "");
  if (!/^\d{3}$/.test(id)) return false;
  const number = Number(id);
  return number >= 7 && number <= 78;
}

function normalizeCandidateIds(value) {
  if (!Array.isArray(value)) return [];
  return value.map(id => String(id));
}

function isValidBallot(candidateIds) {
  return (
    candidateIds.length >= BALLOT_MIN_SIZE &&
    candidateIds.length <= BALLOT_MAX_SIZE &&
    new Set(candidateIds).size === candidateIds.length &&
    candidateIds.every(isCandidateId)
  );
}

function isValidLocalId(localId) {
  return typeof localId === "string" && localId.length >= 16 && localId.length <= 200;
}

function isVote2026ManuallyClosed(config = CLOSE2026_CONFIG) {
  return config?.active === true;
}

function hashLocalId(localId, environment = process.env) {
  return crypto
    .createHmac("sha256", getHashSecret(environment))
    .update(`${EVENT_ID}\0${localId}`, "utf8")
    .digest("hex");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left || ""));
  const rightBuffer = Buffer.from(String(right || ""));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function hasResultsAccess(request, environment = process.env) {
  const authorization = String(request.headers?.authorization || "");
  const prefix = "Bearer ";
  if (!authorization.startsWith(prefix)) return false;
  return safeEqual(authorization.slice(prefix.length), getResultsToken(environment));
}

async function parseJsonBody(request) {
  if (request.body && typeof request.body === "object") return request.body;
  if (typeof request.body === "string") return JSON.parse(request.body || "{}");

  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 16_384) throw new Error("Request body is too large.");
  }
  return JSON.parse(body || "{}");
}

function applyPrivateHeaders(response) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");
}

function sendJson(response, statusCode, payload) {
  applyPrivateHeaders(response);
  response.statusCode = statusCode;
  response.end(JSON.stringify(payload));
}

async function callRedis(command, options = {}) {
  const environment = options.environment || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const { url, token } = getRedisConfiguration(environment);
  const response = await fetchImpl(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.error) {
    throw new Error("Vote storage request failed.");
  }
  return payload.result;
}

async function callRedisTransaction(commands, options = {}) {
  const environment = options.environment || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const { url, token } = getRedisConfiguration(environment);
  const response = await fetchImpl(`${url}/multi-exec`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commands)
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !Array.isArray(payload) || payload.some(item => item?.error)) {
    throw new Error("Vote storage transaction failed.");
  }
  return payload.map(item => item.result);
}

function isoFromMilliseconds(value) {
  const milliseconds = Number(value);
  return Number.isFinite(milliseconds) && milliseconds > 0
    ? new Date(milliseconds).toISOString()
    : null;
}

function handleEndpointError(response, error) {
  if (error instanceof ConfigurationError) {
    sendJson(response, 503, { ok: false, message: "Voting is not configured yet." });
    return;
  }
  console.error("[VOTE 2026 API]", error?.message || error);
  sendJson(response, 500, { ok: false, message: "The vote service is temporarily unavailable." });
}

module.exports = {
  BALLOT_MAX_SIZE,
  BALLOT_MIN_SIZE,
  EVENT_DURATION_DAYS,
  EVENT_DURATION_MS,
  EVENT_ID,
  REDIS_KEYS,
  SUBMIT_BALLOT_SCRIPT,
  TOP_LIMIT,
  callRedis,
  callRedisTransaction,
  handleEndpointError,
  hasResultsAccess,
  hashLocalId,
  isCandidateId,
  isValidBallot,
  isValidLocalId,
  isVote2026ManuallyClosed,
  isoFromMilliseconds,
  normalizeCandidateIds,
  parseJsonBody,
  sendJson
};
