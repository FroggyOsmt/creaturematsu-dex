(() => {
  const STORAGE_KEY = "creaturematsu-second-pillar-drums-seen-v0.2.0";
  const UPDATE_DRUM_CODES = new Set([
    "2A",
    "2B",
    "2C",
    "2D",
    "2E",
    "2F"
  ]);

  function normalizeDrumCode(code) {
    return String(code || "").trim().toUpperCase();
  }

  function readSeenDrums() {
    try {
      const storedCodes = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

      if (!Array.isArray(storedCodes)) return new Set();

      return new Set(
        storedCodes
          .map(normalizeDrumCode)
          .filter(code => UPDATE_DRUM_CODES.has(code))
      );
    } catch (error) {
      return new Set();
    }
  }

  const seenDrums = readSeenDrums();

  function saveSeenDrums() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...seenDrums].sort())
      );
    } catch (error) {
      // La insignia desaparece igualmente durante esta visita.
    }
  }

  function hideUpdateBadge(code) {
    const normalizedCode = normalizeDrumCode(code);

    document
      .querySelector(
        `.pillar-2 .pillar-drum-btn[data-drum-code="${normalizedCode}"] ` +
        ".pillar-drum-update-badge"
      )
      ?.remove();
  }

  function markSeen(code) {
    const normalizedCode = normalizeDrumCode(code);

    if (!UPDATE_DRUM_CODES.has(normalizedCode)) return;

    if (!seenDrums.has(normalizedCode)) {
      seenDrums.add(normalizedCode);
      saveSeenDrums();
    }

    hideUpdateBadge(normalizedCode);
  }

  seenDrums.forEach(hideUpdateBadge);

  window.pillarDrumUpdates = {
    markSeen,
    isSeen(code) {
      return seenDrums.has(normalizeDrumCode(code));
    }
  };
})();
