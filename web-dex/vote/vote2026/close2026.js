// Change only this value to true when the 2026 voting period closes.
const CLOSE2026_ACTIVE = true;

const CLOSE2026_CONFIG = Object.freeze({
  active: CLOSE2026_ACTIVE,
  year: 2026,
  message: "Top of the Favorite Creature 2026 voting is currently closed."
});

if (typeof globalThis !== "undefined") {
  globalThis.CLOSE2026_CONFIG = CLOSE2026_CONFIG;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = CLOSE2026_CONFIG;
}
