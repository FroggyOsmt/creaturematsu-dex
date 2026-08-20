// ========================================
// PILLAR MAP — MOBILE TRANSFERRED INFO
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const sheet = document.querySelector(".mobile-pillar-sheet");
  const pillarView = document.querySelector("[data-mobile-pillar-selected]");
  const categoryView = document.querySelector("[data-mobile-category-selected]");
  const pillarTitle = document.querySelector("[data-mobile-pillar-title]");
  const categoryTitle = document.querySelector("[data-mobile-category-title]");

  if (!sheet || typeof window.renderDetailInfo !== "function") return;

  const infoView = document.createElement("section");
  infoView.className = "mobile-transfer-info-view";
  infoView.dataset.mobileTransferInfoView = "";
  infoView.hidden = true;
  infoView.setAttribute("aria-hidden", "true");
  infoView.innerHTML = `
    <div class="mobile-transfer-info-header">
      <h2 class="mobile-transfer-info-title" data-mobile-transfer-info-title></h2>

      <button
        type="button"
        class="mobile-transfer-info-back"
        data-mobile-transfer-info-back
      >
        BACK
      </button>
    </div>

    <div class="mobile-matsu-dex mobile-transfer-info-dex">
      <span>MATSU DEX:</span>
      <strong data-mobile-transfer-info-dex></strong>
    </div>

    <div
      class="mobile-transfer-info-shared"
      data-mobile-transfer-info-shared
    ></div>
  `;
  sheet.appendChild(infoView);

  const infoTitle = infoView.querySelector("[data-mobile-transfer-info-title]");
  const infoDex = infoView.querySelector("[data-mobile-transfer-info-dex]");
  const sharedContainer = infoView.querySelector(
    "[data-mobile-transfer-info-shared]"
  );
  const infoBack = infoView.querySelector("[data-mobile-transfer-info-back]");
  const transferInfoHistoryKey = "creaturematsuPillarMapInfo";

  let returnView = null;
  let infoIsOpen = false;

  function getTransferredInfoHistoryState(state = window.history.state) {
    if (!state || typeof state !== "object") return null;

    const infoState = state[transferInfoHistoryKey];

    if (!infoState || !["pillar", "category"].includes(infoState.type)) {
      return null;
    }

    return infoState;
  }

  function writeTransferredInfoHistoryState(type) {
    const currentState = window.history.state;
    const baseState =
      currentState && typeof currentState === "object" ? currentState : {};

    window.history.pushState(
      {
        ...baseState,
        [transferInfoHistoryKey]: { type }
      },
      "",
      window.location.href
    );
  }

  function transitionSheet(mutate) {
    if (!mobileQuery.matches) {
      mutate();
      return;
    }

    const previousTop = sheet.getBoundingClientRect().top;

    sheet.classList.add("mobile-pillar-sheet-no-transition");
    mutate();

    const nextTop = sheet.getBoundingClientRect().top;
    const offset = previousTop - nextTop;

    sheet.style.setProperty(
      "--mobile-pillar-sheet-offset",
      `${offset.toFixed(2)}px`
    );
    sheet.getBoundingClientRect();

    window.requestAnimationFrame(() => {
      sheet.classList.remove("mobile-pillar-sheet-no-transition");
      sheet.style.setProperty("--mobile-pillar-sheet-offset", "0px");
    });
  }

  function getTransferredInfo(type) {
    const pillar = sheet.dataset.mobilePillar || "";
    const drumCode = sheet.dataset.mobileCategory || "";
    const pillarData = window.pillarMapData?.[pillar] || null;

    if (!pillarData) return null;

    if (type === "category") {
      const categoryData = window.pillarCategoryData?.[drumCode] || null;

      if (!categoryData) return null;

      return {
        type,
        pillar,
        drumCode,
        title: categoryTitle?.textContent || categoryData.label || "UNKNOWN",
        dexRange: categoryData.dexRange || ""
      };
    }

    return {
      type: "pillar",
      pillar,
      drumCode: null,
      title:
        pillarTitle?.textContent ||
        `${pillarData.ordinal || `Pillar ${pillar}`}: ${pillarData.title || ""}`,
      dexRange: pillarData.matsuDex || ""
    };
  }

  function removeSharedRow(label) {
    sharedContainer
      .querySelectorAll(".detail-pillar-data-row")
      .forEach(row => {
        const rowLabel = row
          .querySelector(".detail-pillar-data-label")
          ?.textContent.trim()
          .toUpperCase();

        if (rowLabel === label) row.remove();
      });
  }

  function moveContentsAfterSummary(type) {
    const contents = sharedContainer.querySelector(".detail-toc");
    const logCard = sharedContainer.querySelector(".detail-log-card");
    const description = logCard?.querySelector(".detail-log-section");
    const badgeCollection = logCard?.querySelector(
      ".detail-badge-collection"
    );

    if (!contents || !logCard || !description) return;

    if (type === "pillar" && badgeCollection) {
      badgeCollection.after(contents);
      return;
    }

    description.after(contents);
  }

  function prepareTransferredMarkup(type) {
    sharedContainer.dataset.transferInfoType = type;
    sharedContainer.querySelector(".pillar-detail-preview")?.remove();
    removeSharedRow("MATSU DEX");

    if (type === "pillar") {
      sharedContainer.querySelector(".detail-pillar-image")?.remove();
      sharedContainer
        .querySelector(".detail-info-right > .detail-info-section")
        ?.remove();
    } else {
      sharedContainer.querySelector(".detail-category-image")?.remove();
      sharedContainer.querySelector(".detail-category-right")?.remove();

      const categoryColumns = sharedContainer.querySelector(
        ".detail-category-columns"
      );
      const categoryLeft = categoryColumns?.querySelector(
        ".detail-category-left"
      );

      if (categoryLeft && categoryLeft.children.length === 0) {
        categoryColumns.remove();
      }
    }

    moveContentsAfterSummary(type);
  }

  function renderTransferredInfo(data) {
    if (!infoTitle || !infoDex || !sharedContainer) return;

    infoTitle.textContent = data.title;
    infoDex.textContent = data.dexRange;
    sharedContainer.replaceChildren();

    window.renderDetailInfo({
      container: sharedContainer,
      type: data.type,
      pillar: data.pillar,
      drumCode: data.drumCode
    });

    prepareTransferredMarkup(data.type);

    const scrollArea = sharedContainer.querySelector(".detail-info-scroll");

    if (scrollArea) scrollArea.scrollTop = 0;
  }

  function openTransferredInfo(type, { writeHistory = true } = {}) {
    if (!mobileQuery.matches || infoIsOpen) return;

    const data = getTransferredInfo(type);

    if (!data) return;

    returnView = type === "category" ? categoryView : pillarView;
    renderTransferredInfo(data);
    infoIsOpen = true;

    transitionSheet(() => {
      if (returnView) {
        returnView.hidden = true;
        returnView.setAttribute("aria-hidden", "true");
      }

      infoView.hidden = false;
      infoView.setAttribute("aria-hidden", "false");
      sheet.classList.add("mobile-transfer-info-open");
    });

    if (writeHistory) writeTransferredInfoHistoryState(type);
  }

  function closeTransferredInfo({ immediate = false } = {}) {
    if (!infoIsOpen) return;

    const restoreSourceView = () => {
      sheet.classList.remove("mobile-transfer-info-open");
      infoView.hidden = true;
      infoView.setAttribute("aria-hidden", "true");

      if (returnView) {
        returnView.hidden = false;
        returnView.setAttribute("aria-hidden", "false");
      }
    };

    if (immediate) {
      restoreSourceView();
      sheet.classList.remove("mobile-pillar-sheet-no-transition");
      sheet.style.setProperty("--mobile-pillar-sheet-offset", "0px");
    } else {
      transitionSheet(restoreSourceView);
    }

    infoIsOpen = false;
    returnView = null;
  }

  sheet.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;

    const trigger = event.target.closest("[data-mobile-transfer-info]");

    if (!trigger || !sheet.contains(trigger)) return;
    openTransferredInfo(trigger.dataset.mobileTransferInfo);
  });

  infoBack?.addEventListener("click", () => {
    if (getTransferredInfoHistoryState()) {
      window.history.back();
      return;
    }

    closeTransferredInfo();
  });

  window.addEventListener("popstate", event => {
    const infoState = getTransferredInfoHistoryState(event.state);

    if (infoState) {
      openTransferredInfo(infoState.type, { writeHistory: false });
      return;
    }

    const wasInfoOpen = infoIsOpen;

    closeTransferredInfo({ immediate: true });

    if (wasInfoOpen) {
      window.dispatchEvent(new Event("mobile-transfer-info-closed"));
    }
  });

  mobileQuery.addEventListener("change", event => {
    if (!event.matches) closeTransferredInfo({ immediate: true });
  });

  const initialInfoState = getTransferredInfoHistoryState();

  if (initialInfoState) {
    openTransferredInfo(initialInfoState.type, { writeHistory: false });
  }
});
