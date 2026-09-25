(() => {
  const NEW_STORAGE_KEY = "creaturematsu-new-variations-v0.1.2";
  const UPDATE_STORAGE_KEY = "creaturematsu-updated-status-history-v0.2.0";
  const TBSA_NEW_STORAGE_KEY = "creaturematsu-tbsa-seen-v0.2.0";
  const PILLAR_DRUM_UPDATE_STORAGE_KEY =
    "creaturematsu-second-pillar-drums-seen-v0.2.0";
  const PILLAR_DRUM_CODES = new Set([
    "2A",
    "2B",
    "2C",
    "2D",
    "2E",
    "2F"
  ]);
  const NEW_VARIATION_IDS = new Set(
    Array.from({ length: 36 }, (_, index) =>
      String(index + 43).padStart(3, "0")
    )
  );
  const UPDATED_STATUS_IDS = new Set(
    Array.from({ length: 6 }, (_, index) =>
      String(index + 13).padStart(3, "0")
    )
  );

  function normalizeCreatureId(id) {
    return String(id || "").padStart(3, "0");
  }

  function isNewVariation(creature) {
    const id = normalizeCreatureId(creature?.id);

    return (
      creature?.pillar === "VARIATIONS" &&
      NEW_VARIATION_IDS.has(id)
    );
  }

  function isUpdatedStatus(creature) {
    const id = normalizeCreatureId(creature?.id);

    return (
      creature?.category === "STATUS" &&
      UPDATED_STATUS_IDS.has(id)
    );
  }

  function hasUnseenUpdate(creature) {
    const id = normalizeCreatureId(creature?.id);

    return isUpdatedStatus(creature) && !viewedUpdates.has(id);
  }

  function readStoredCreatures(storageKey, allowedIds) {
    try {
      const storedIds = JSON.parse(localStorage.getItem(storageKey) || "[]");

      if (!Array.isArray(storedIds)) return new Set();

      return new Set(
        storedIds
          .map(normalizeCreatureId)
          .filter(id => allowedIds.has(id))
      );
    } catch (error) {
      return new Set();
    }
  }

  const discoveredCreatures = readStoredCreatures(
    NEW_STORAGE_KEY,
    NEW_VARIATION_IDS
  );
  const viewedUpdates = readStoredCreatures(
    UPDATE_STORAGE_KEY,
    UPDATED_STATUS_IDS
  );

  function readTbsaSeen() {
    try {
      return localStorage.getItem(TBSA_NEW_STORAGE_KEY) === "true";
    } catch (error) {
      return false;
    }
  }

  function readSeenPillarDrums() {
    try {
      const storedCodes = JSON.parse(
        localStorage.getItem(PILLAR_DRUM_UPDATE_STORAGE_KEY) || "[]"
      );

      if (!Array.isArray(storedCodes)) return new Set();

      return new Set(
        storedCodes
          .map(code => String(code || "").trim().toUpperCase())
          .filter(code => PILLAR_DRUM_CODES.has(code))
      );
    } catch (error) {
      return new Set();
    }
  }

  function syncFeatureBadges() {
    if (readTbsaSeen()) {
      document
        .querySelector(
          '[data-analytics-route="/system"] .new-feature-badge-corner'
        )
        ?.remove();
      document.querySelector(".new-feature-badge-menu")?.remove();
    }

    if (readSeenPillarDrums().size === PILLAR_DRUM_CODES.size) {
      document
        .querySelector(
          ".pillar-map-sidebar-btn .update-feature-badge-corner"
        )
        ?.remove();
      document.querySelector(".update-feature-badge-menu")?.remove();
    }
  }

  function saveStoredCreatures(storageKey, creatures) {
    try {
      const storedIds = [...creatures].sort();
      localStorage.setItem(storageKey, JSON.stringify(storedIds));
    } catch (error) {
      // La ficha sigue funcionando aunque el navegador bloquee localStorage.
    }
  }

  function appendBadge(card, className, text, label) {
    const badge = document.createElement("span");
    badge.className = className;
    badge.textContent = text;
    badge.setAttribute("aria-label", label);
    badge.setAttribute("aria-hidden", "true");
    card.appendChild(badge);
  }

  function decorateCard(card, creature) {
    const id = normalizeCreatureId(creature?.id);

    if (isNewVariation(creature) && !discoveredCreatures.has(id)) {
      appendBadge(card, "new-creature-badge", "NEW", "New creature");
    }

    if (hasUnseenUpdate(creature)) {
      appendBadge(
        card,
        "update-creature-badge",
        "UPDATE",
        "Updated creature"
      );
    }
  }

  function markDiscovered(creature) {
    const id = normalizeCreatureId(creature.id);

    if (isNewVariation(creature)) {
      if (!discoveredCreatures.has(id)) {
        discoveredCreatures.add(id);
        saveStoredCreatures(NEW_STORAGE_KEY, discoveredCreatures);
      }

      document
        .querySelectorAll(`.card[data-id="${id}"] .new-creature-badge`)
        .forEach(badge => badge.remove());
    }

  }

  function markUpdateViewed(creature) {
    if (!isUpdatedStatus(creature)) return;

    const id = normalizeCreatureId(creature.id);

    if (!viewedUpdates.has(id)) {
      viewedUpdates.add(id);
      saveStoredCreatures(UPDATE_STORAGE_KEY, viewedUpdates);
    }

    document
      .querySelectorAll(
        `.card[data-id="${id}"] .update-creature-badge, ` +
        ".extra-history-btn .extra-update-badge"
      )
      .forEach(badge => badge.remove());
  }

  window.creatureNewDiscovery = {
    decorateCard,
    markDiscovered,
    hasUnseenUpdate,
    markUpdateViewed
  };

  syncFeatureBadges();
  window.addEventListener("pageshow", syncFeatureBadges);
  window.addEventListener("focus", syncFeatureBadges);
  window.addEventListener("storage", event => {
    if (
      event.key === TBSA_NEW_STORAGE_KEY ||
      event.key === PILLAR_DRUM_UPDATE_STORAGE_KEY
    ) {
      syncFeatureBadges();
    }
  });

  window.creatureFeatureBadges = {
    sync: syncFeatureBadges
  };
})();
