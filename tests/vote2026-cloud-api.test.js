const test = require("node:test");
const assert = require("node:assert/strict");

const shared = require("../web-dex/api/vote2026/_shared");
const ballotsHandler = require("../web-dex/api/vote2026/ballots");
const resultsHandler = require("../web-dex/api/vote2026/results");
const close2026Config = require("../web-dex/vote/vote2026/close2026");

function createResponse() {
  return {
    headers: {},
    statusCode: 200,
    body: "",
    setHeader(name, value) {
      this.headers[String(name).toLowerCase()] = value;
    },
    end(value = "") {
      this.body = String(value);
    }
  };
}

function setTestEnvironment() {
  delete process.env.VOTE2026_REDIS_REST_URL;
  delete process.env.VOTE2026_REDIS_REST_TOKEN;
  process.env.UPSTASH_REDIS_REST_KV_REST_API_URL = "https://redis.example.test";
  process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN = "redis-token-for-tests-only-123456789";
  process.env.VOTE2026_HASH_SECRET = "hash-secret-for-tests-only-123456789";
  process.env.VOTE2026_RESULTS_TOKEN = "results-token-for-tests-only-123456";
}

test("validates the fixed 72-candidate range and one to three choices", () => {
  assert.equal(shared.isCandidateId("007"), true);
  assert.equal(shared.isCandidateId("078"), true);
  assert.equal(shared.isCandidateId("006"), false);
  assert.equal(shared.isCandidateId("079"), false);
  assert.equal(shared.isValidBallot(["007"]), true);
  assert.equal(shared.isValidBallot(["007", "042"]), true);
  assert.equal(shared.isValidBallot(["007", "042", "078"]), true);
  assert.equal(shared.isValidBallot(["007", "007", "078"]), false);
  assert.equal(shared.isValidBallot([]), false);
  assert.equal(shared.isValidBallot(["007", "042", "051", "078"]), false);
});

test("keeps the year-specific manual close switch active", () => {
  assert.equal(close2026Config.active, true);
  assert.equal(close2026Config.year, 2026);
  assert.equal(
    close2026Config.message,
    "Top of the Favorite Creature 2026 voting is currently closed."
  );
  assert.equal(shared.isVote2026ManuallyClosed(close2026Config), true);
  assert.equal(shared.isVote2026ManuallyClosed({ active: true }), true);
});

test("rejects new ballots after closing without exposing the local ID", async () => {
  setTestEnvironment();
  const originalFetch = global.fetch;
  let fetchCalled = false;
  global.fetch = async () => {
    fetchCalled = true;
    throw new Error("Closed voting must not contact storage.");
  };

  try {
    const localId = "browser-local-id-that-must-not-be-stored";
    const request = {
      method: "POST",
      headers: {},
      body: { localId, candidateIds: ["018", "051", "069"] }
    };
    const response = createResponse();
    await ballotsHandler(request, response);

    assert.equal(response.statusCode, 410);
    assert.equal(JSON.parse(response.body).code, "voting-closed");
    assert.equal(response.body.includes(localId), false);
    assert.equal(fetchCalled, false);
  } finally {
    global.fetch = originalFetch;
  }
});

test("publishes only aggregate scores after closing", async () => {
  setTestEnvironment();
  const originalFetch = global.fetch;
  global.fetch = async (_url, _options) => ({
    ok: true,
    async json() {
      return [
        { result: ["1793000000000", "1793604800000", "4"] },
        { result: ["009", "2", "007", "2", "008", "1", "011", "1", "018", "1", "042", "1", "063", "1", "069", "1"] }
      ];
    }
  });

  try {
    const publicResponse = createResponse();
    await resultsHandler({
      method: "GET",
      headers: {}
    }, publicResponse);
    const payload = JSON.parse(publicResponse.body);

    assert.equal(publicResponse.statusCode, 200);
    assert.equal(payload.meta.mode, "closed");
    assert.equal(payload.summary.totalBallots, 4);
    assert.equal(payload.summary.totalPoints, 10);
    assert.deepEqual(payload.top.map(entry => entry.candidateId), ["007", "009"]);
    assert.deepEqual(payload.ties.map(entry => entry.candidateId), ["008", "011", "018", "042", "063", "069"]);
    assert.deepEqual(payload.remaining, []);
    assert.equal("voters" in payload, false);
    assert.equal("ballots" in payload, false);
  } finally {
    global.fetch = originalFetch;
  }
});
