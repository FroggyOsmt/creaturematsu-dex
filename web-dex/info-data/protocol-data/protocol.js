(() => {
  const MAX_PROTOCOL_ENTRIES = 3;
  const SECURE_RANKS = [
    {
      rank: 1,
      name: "SAFE",
      file: "rank-1.png",
      description: "The creature can be approached, handled, and interacted with normally. He does not require special supervision or protective measures and can generally remain around people without additional safety precautions."
    },
    {
      rank: 2,
      name: "MISCHIEVOUS",
      file: "rank-2.png",
      description: "The creature can generally remain around people and may display affectionate behavior. However, he may occasionally exhibit unpredictable or disruptive behavior during interaction. Appropriate attention and responsible handling are recommended."
    },
    {
      rank: 3,
      name: "CAUTION",
      file: "rank-3.png",
      description: "The creature can generally remain around people and may display calm or affectionate behavior. However, his abilities, physical characteristics, or movements may cause accidental harm or damage. Appropriate precautions should be taken during interaction, even when he is cooperative."
    },
    {
      rank: 4,
      name: "SUPERVISED",
      file: "rank-4.png",
      description: "The creature requires regular supervision during interaction. His behavior, abilities, or unpredictable actions may cause significant harm or damage if left unmanaged. A responsible person should remain present and intervene when necessary to maintain a safe environment."
    },
    {
      rank: 5,
      name: "DANGER",
      file: "rank-5.png",
      description: "The creature requires strict safety protocols and restricted interaction. His abilities, behavior, or anomalous effects may cause severe or difficult-to-control consequences if handled improperly. Interaction should only occur under established safety procedures, and all restrictions must be followed without exception."
    }
  ];
  const protocolScriptUrl = document.currentScript?.src || "";
  let lastFocusedProtocolButton = null;
  let lastFocusedSecureHelpButton = null;
  let mobileSecureTooltipCleanup = null;
  const mobileSecureTooltipSeen = new Set();

  function escapeProtocolText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeSecureRank(value) {
    const rawValue = value && typeof value === "object"
      ? value.name ?? value.value ?? value.rank
      : value;
    const normalized = String(rawValue == null ? "" : rawValue).trim().toUpperCase();
    if (!normalized) return "";

    const numericRank = Number(normalized);
    if (Number.isInteger(numericRank) && numericRank >= 1 && numericRank <= SECURE_RANKS.length) {
      return SECURE_RANKS[numericRank - 1].name;
    }

    const aliases = {
      SEGURO: "SAFE",
      TRAVIESO: "MISCHIEVOUS",
      PRECAUCION: "CAUTION",
      "PRECAUCIÓN": "CAUTION",
      SUPERVISADO: "SUPERVISED",
      PELIGRO: "DANGER"
    };
    const candidate = aliases[normalized] || normalized;
    return SECURE_RANKS.some((item) => item.name === candidate) ? candidate : "";
  }

  function protocolImage(relativePath) {
    if (protocolScriptUrl) {
      return new URL(`../../images/${relativePath}`, protocolScriptUrl).href;
    }
    return `./images/${relativePath}`;
  }

  function secureRankImage(file) {
    return protocolImage(`secure-rank/${file}`);
  }

  function getSecureRank(value) {
    const name = normalizeSecureRank(value);
    const configured = SECURE_RANKS.find((item) => item.name === name);
    return configured
      ? { ...configured, src: secureRankImage(configured.file) }
      : null;
  }

  function getProtocolData(creature) {
    const configuredProtocol = creature?.protocol;
    const configuredEntries = Array.isArray(configuredProtocol)
      ? configuredProtocol
      : Array.isArray(configuredProtocol?.entries)
        ? configuredProtocol.entries
        : [];

    const entries = configuredEntries
      .slice(0, MAX_PROTOCOL_ENTRIES)
      .map((entry, index) => {
        if (typeof entry === "string") {
          return {
            title: configuredEntries.length === 1
              ? "PROTOCOL"
              : `PROTOCOL ${index + 1}`,
            text: entry
          };
        }

        return {
          title: String(
            entry?.title || (
              configuredEntries.length === 1
                ? "PROTOCOL"
                : `PROTOCOL ${index + 1}`
            )
          ),
          text: String(entry?.text || "")
        };
      });

    const safety = String(
      !Array.isArray(configuredProtocol) && configuredProtocol?.safety
        ? configuredProtocol.safety
        : ""
    );

    return {
      entries,
      safety: normalizeSecureRank(safety)
    };
  }

  function renderProtocolMarkdown(value) {
    const text = String(value || "").trim() || "TBA";

    if (typeof window.parseMarkdown !== "function") return escapeProtocolText(text);

    return window.parseMarkdown(text, {
      compactSeparatorAfter: true,
      trimTrailingBreaks: true
    });
  }

  function renderCard(creature) {
    const protocolData = getProtocolData(creature);
    const secureRank = getSecureRank(protocolData.safety);

    return `
      <section class="creature-protocol-card" data-detail-priority-card="protocol">
        <div class="info-label text-card-label">PROTOCOL</div>

        <div class="creature-protocol-body">
          <div class="creature-protocol-buttons">
            ${protocolData.entries.length
              ? protocolData.entries.map((entry, index) => `
                  <button
                    type="button"
                    class="creature-protocol-button"
                    data-protocol-entry="${index}"
                  >${escapeProtocolText(entry.title)}</button>
                `).join("")
              : '<div class="creature-protocol-empty">No protocols registered.</div>'}
          </div>

          <div class="creature-protocol-secure">
            <button
              type="button"
              class="creature-protocol-secure-help"
              data-secure-help
              data-tooltip="About the Security Ranks"
              data-mobile-tooltip="About the Security Ranks, click here --&gt;"
              aria-label="About the Security Ranks"
            ><img src="${escapeProtocolText(protocolImage("help.png"))}" alt=""></button>
            ${secureRank
              ? `<div class="creature-protocol-secure-display">
                  <img
                    class="creature-protocol-secure-icon"
                    src="${escapeProtocolText(secureRank.src)}"
                    alt="Rango ${secureRank.rank}: ${escapeProtocolText(secureRank.name)}"
                  >
                  <strong class="creature-protocol-secure-name">${escapeProtocolText(secureRank.name)}</strong>
                </div>`
              : '<div class="creature-protocol-secure-empty">TBA</div>'}
          </div>
        </div>
      </section>
    `;
  }

  function ensurePopup() {
    let popup = document.getElementById("protocolPopup");
    if (popup) return popup;

    popup = document.createElement("div");
    popup.id = "protocolPopup";
    popup.className = "protocol-popup-overlay";
    popup.setAttribute("aria-hidden", "true");
    popup.innerHTML = `
      <section class="protocol-popup-card" role="dialog" aria-modal="true" aria-labelledby="protocolPopupTitle">
        <div class="protocol-popup-title" id="protocolPopupTitle">PROTOCOL</div>
        <div class="protocol-popup-body" id="protocolPopupBody">TBA</div>
        <button type="button" class="protocol-popup-back">BACK</button>
      </section>
    `;

    popup.querySelector(".protocol-popup-back")
      .addEventListener("click", closePopup);

    document.body.appendChild(popup);
    return popup;
  }

  function openPopup(creature, entryIndex, triggerButton) {
    const protocolData = getProtocolData(creature);
    const entry = protocolData.entries[entryIndex];
    if (!entry) return;

    const popup = ensurePopup();
    const title = popup.querySelector("#protocolPopupTitle");
    const body = popup.querySelector("#protocolPopupBody");

    lastFocusedProtocolButton = triggerButton || document.activeElement;
    title.textContent = entry.title || "PROTOCOL";
    body.innerHTML = renderProtocolMarkdown(entry.text);
    body.scrollTop = 0;

    popup.classList.add("open");
    popup.setAttribute("aria-hidden", "false");
    popup.querySelector(".protocol-popup-back").focus();
  }

  function closePopup() {
    const popup = document.getElementById("protocolPopup");
    if (!popup) return;

    popup.classList.remove("open");
    popup.setAttribute("aria-hidden", "true");

    if (lastFocusedProtocolButton?.isConnected) {
      lastFocusedProtocolButton.focus();
    }

    lastFocusedProtocolButton = null;
  }

  function secureHelpRows() {
    return SECURE_RANKS.map((rank) => `
      <div class="secure-rank-help-row" data-secure-rank="${rank.rank}">
        <div class="secure-rank-help-identity">
          <img src="${escapeProtocolText(secureRankImage(rank.file))}" alt="Rango ${rank.rank}: ${escapeProtocolText(rank.name)}">
          <strong>${escapeProtocolText(rank.name)}</strong>
        </div>
        <p>${escapeProtocolText(rank.description)}</p>
      </div>
    `).join("");
  }

  function ensureSecureHelpPopup() {
    let popup = document.getElementById("secureRankHelpPopup");
    if (popup) return popup;

    popup = document.createElement("div");
    popup.id = "secureRankHelpPopup";
    popup.className = "secure-rank-help-overlay";
    popup.setAttribute("aria-hidden", "true");
    popup.innerHTML = `
      <section class="secure-rank-help-card" role="dialog" aria-modal="true" aria-labelledby="secureRankHelpTitle">
        <div class="secure-rank-help-title" id="secureRankHelpTitle">SECURE RANKS</div>
        <div class="secure-rank-help-grid">${secureHelpRows()}</div>
        <button type="button" class="protocol-popup-back" data-secure-help-close>BACK</button>
      </section>
    `;
    popup.querySelector("[data-secure-help-close]").addEventListener("click", closeSecureHelpPopup);
    document.body.appendChild(popup);
    return popup;
  }

  function openSecureHelpPopup(triggerButton) {
    const popup = ensureSecureHelpPopup();
    lastFocusedSecureHelpButton = triggerButton || document.activeElement;
    popup.classList.add("open");
    popup.setAttribute("aria-hidden", "false");
    popup.querySelector("[data-secure-help-close]").focus();
  }

  function closeSecureHelpPopup() {
    const popup = document.getElementById("secureRankHelpPopup");
    if (!popup) return;
    popup.classList.remove("open");
    popup.setAttribute("aria-hidden", "true");
    if (lastFocusedSecureHelpButton?.isConnected) lastFocusedSecureHelpButton.focus();
    lastFocusedSecureHelpButton = null;
  }

  function bindMobileSecureTooltip(container, creature) {
    if (mobileSecureTooltipCleanup) mobileSecureTooltipCleanup();
    mobileSecureTooltipCleanup = null;

    const helpButton = container.querySelector("[data-secure-help]");
    const scrollRoot = container.closest(".detail-page");
    const mobileQuery = window.matchMedia?.("(max-width: 768px)");
    if (!helpButton || !scrollRoot || !mobileQuery) return;

    let lastScrollTop = scrollRoot.scrollTop;
    let hideTimer = 0;
    let scrollFrame = 0;

    const hideTooltip = () => {
      window.clearTimeout(hideTimer);
      hideTimer = 0;
      helpButton.classList.remove("is-mobile-auto-tooltip");
    };

    const showTooltip = () => {
      mobileSecureTooltipSeen.add(String(creature?.id || ""));
      helpButton.classList.add("is-mobile-auto-tooltip");
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(hideTooltip, 3200);
    };

    const inspectScroll = () => {
      scrollFrame = 0;
      const currentScrollTop = scrollRoot.scrollTop;
      const scrollingDown = currentScrollTop > lastScrollTop + 1;
      const scrollingUp = currentScrollTop < lastScrollTop - 1;
      lastScrollTop = currentScrollTop;

      if (!mobileQuery.matches) {
        hideTooltip();
        return;
      }
      if (scrollingUp) {
        hideTooltip();
        return;
      }
      if (!scrollingDown || mobileSecureTooltipSeen.has(String(creature?.id || ""))) return;

      const rootRect = scrollRoot.getBoundingClientRect();
      const helpRect = helpButton.getBoundingClientRect();
      const visibleTop = Math.max(rootRect.top, 0);
      const visibleBottom = Math.min(rootRect.bottom, window.innerHeight);
      if (helpRect.top < visibleBottom && helpRect.bottom > visibleTop) showTooltip();
    };

    const handleScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(inspectScroll);
    };

    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });
    mobileSecureTooltipCleanup = () => {
      scrollRoot.removeEventListener("scroll", handleScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      hideTooltip();
    };
  }

  const responsiveDetailBindings = new WeakMap();

  function placeDetailCardAfter(anchor, card) {
    if (!anchor?.parentElement || !card) return;
    if (anchor.nextElementSibling === card) return;
    anchor.parentElement.insertBefore(card, anchor.nextElementSibling);
  }

  function arrangeDetailPriorityCards(container, isMobile) {
    if (!container?.querySelector) return;

    const quoteCard = container.querySelector('[data-detail-priority-card="quote"]');
    const descriptionCard = container.querySelector('[data-detail-priority-card="description"]');
    const extraCard = container.querySelector('[data-detail-priority-card="extra"]');
    const protocolCard = container.querySelector('[data-detail-priority-card="protocol"]');
    const rightColumn = container.querySelector(".detail-right-column");
    const leftTextSection = container.querySelector(".detail-left-column .detail-text-section") || quoteCard?.parentElement;
    if (!quoteCard || !protocolCard || !rightColumn || !leftTextSection) return;

    if (isMobile) {
      leftTextSection.insertBefore(quoteCard, leftTextSection.firstElementChild);
      placeDetailCardAfter(quoteCard, descriptionCard);
      if (extraCard) placeDetailCardAfter(extraCard, protocolCard);
      else rightColumn.insertBefore(protocolCard, rightColumn.firstElementChild);
      return;
    }

    leftTextSection.insertBefore(protocolCard, leftTextSection.firstElementChild);
    if (extraCard) placeDetailCardAfter(extraCard, quoteCard);
    else rightColumn.insertBefore(quoteCard, rightColumn.firstElementChild);
    placeDetailCardAfter(quoteCard, descriptionCard);
  }

  function bindResponsiveDetailCards(container) {
    const mobileQuery = window.matchMedia?.("(max-width: 768px)");
    arrangeDetailPriorityCards(container, Boolean(mobileQuery?.matches));
    if (!mobileQuery || responsiveDetailBindings.has(container)) return;

    const handleLayoutChange = (event) => {
      arrangeDetailPriorityCards(container, event.matches);
    };

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", handleLayoutChange);
    } else {
      mobileQuery.addListener?.(handleLayoutChange);
    }
    responsiveDetailBindings.set(container, handleLayoutChange);
  }

  function bindCard(container, creature) {
    container
      .querySelectorAll("[data-protocol-entry]")
      .forEach(button => {
        button.addEventListener("click", () => {
          openPopup(creature, Number(button.dataset.protocolEntry), button);
        });
      });

    container
      .querySelectorAll("[data-secure-help]")
      .forEach(button => {
        button.addEventListener("click", () => openSecureHelpPopup(button));
      });

    bindMobileSecureTooltip(container, creature);
  }

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (document.getElementById("secureRankHelpPopup")?.classList.contains("open")) {
      closeSecureHelpPopup();
      return;
    }
    if (!document.getElementById("protocolPopup")?.classList.contains("open")) return;

    closePopup();
  });

  window.CreatureProtocol = {
    secureRanks: SECURE_RANKS.map((item) => ({ ...item, src: secureRankImage(item.file) })),
    normalizeSecureRank,
    getSecureRank,
    getData: getProtocolData,
    renderCard,
    arrangeDetailPriorityCards,
    bindResponsiveDetailCards,
    bindCard,
    openSecureHelpPopup,
    closeSecureHelpPopup,
    openPopup,
    closePopup
  };
})();
