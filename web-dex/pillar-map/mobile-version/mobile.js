// ========================================
// PILLAR MAP — MOBILE HOME
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const temple = document.querySelector(".pillar-map-wrap");
  const sheet = document.querySelector(".mobile-pillar-sheet");
  const welcomeView = document.querySelector("[data-mobile-pillar-welcome]");
  const selectedView = document.querySelector("[data-mobile-pillar-selected]");
  const categoryView = document.querySelector("[data-mobile-category-selected]");
  const selectedTitle = document.querySelector("[data-mobile-pillar-title]");
  const selectedDex = document.querySelector("[data-mobile-pillar-dex]");
  const categoryList = document.querySelector("[data-mobile-pillar-categories]");
  const categoryTitle = document.querySelector("[data-mobile-category-title]");
  const categoryDex = document.querySelector("[data-mobile-category-dex]");
  const categoryCreatureList = document.querySelector(
    "[data-mobile-category-creatures]"
  );
  const variationComingSoon = document.querySelector(
    "[data-mobile-variation-coming-soon]"
  );
  const pillarColumns = document.querySelector(".pillar-columns");
  const previousButton = document.querySelector("[data-mobile-pillar-previous]");
  const nextButton = document.querySelector("[data-mobile-pillar-next]");
  const backButton = document.querySelector("[data-mobile-pillar-back]");
  const categoryUpButton = document.querySelector("[data-mobile-category-up]");
  const categoryDownButton = document.querySelector(
    "[data-mobile-category-down]"
  );
  const categoryBackButton = document.querySelector(
    "[data-mobile-category-back]"
  );
  const availablePillars = ["1", "2"].filter(
    pillar => window.pillarMapData?.[pillar]
  );
  const availableCategories = ["1A", "1B", "1C", "1D", "1E", "1F"].filter(
    code => window.pillarCategoryData?.[code]
  );
  const availableVariations = ["2A", "2B", "2C", "2D", "2E", "2F"].filter(
    code => window.pillarMapData?.["2"]?.drums?.[code]
  );

  let selectedPillar = null;
  let selectedCategory = null;

  const mobileHistoryKey = "creaturematsuPillarMap";
  const pillarFocusPaddingY = 40;
  const pillarFocusVerticalAlign = 0.676;
  const categoryFocusScale = 2.8;
  const mobilePastelColors = {
    "#F36A6B": "#FBD1D1",
    "#738BF2": "#D4DBFB",
    "#B1F575": "#E7FCD4",
    "#B17CEE": "#E7D6FA",
    "#FFDC60": "#FFF4CE",
    "#FF94DD": "#FFDEF4"
  };

  function getMobilePastelColor(color) {
    return mobilePastelColors[String(color || "").toUpperCase()] || "#FFE2C1";
  }

  function toDisplayTitle(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\b[a-z]/g, letter => letter.toUpperCase());
  }

  function getPillarColumn(pillar) {
    return document.querySelector(`.pillar-column.pillar-${pillar}`);
  }

  function getCategoryDrum(code) {
    return document.querySelector(`.pillar-drum-btn[data-drum-code="${code}"]`);
  }

  function getAvailableDrumCodes() {
    return selectedPillar === "2" ? availableVariations : availableCategories;
  }

  function getMobileHistoryState(state = window.history.state) {
    if (!state || typeof state !== "object") return null;

    const mobileState = state[mobileHistoryKey];

    if (
      !mobileState ||
      !["welcome", "pillar", "category"].includes(mobileState.view)
    ) {
      return null;
    }

    return mobileState;
  }

  function writeMobileHistoryState(view, mode = "push") {
    if (!mobileQuery.matches) return;

    const currentState = window.history.state;
    const baseState =
      currentState && typeof currentState === "object" ? currentState : {};
    const nextState = {
      ...baseState,
      [mobileHistoryKey]: {
        view,
        pillar: selectedPillar,
        category: selectedCategory
      }
    };

    if (mode === "replace") {
      window.history.replaceState(nextState, "", window.location.href);
      return;
    }

    window.history.pushState(nextState, "", window.location.href);
  }

  function resetMobileScrollPosition() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  function getCurrentTempleScale() {
    if (!temple) return 1;

    const transform = window.getComputedStyle(temple).transform;

    if (!transform || transform === "none") return 1;

    const matrixValues = transform
      .slice(transform.indexOf("(") + 1, -1)
      .split(",")
      .map(value => Number.parseFloat(value.trim()));

    return matrixValues[0] || 1;
  }

  function getTempleFocusZone() {
    const homeTop = temple?.closest(".home-page")?.getBoundingClientRect().top || 0;
    const zoneTop = Math.max(homeTop, 0);
    const zoneBottom = Math.max(homeTop + sheet.offsetTop, zoneTop + 1);

    return { homeTop, zoneTop, zoneBottom };
  }

  function focusTempleOnPillar(pillar) {
    const column = getPillarColumn(pillar);

    if (!temple || !sheet || !column) return;

    temple.classList.remove("mobile-category-zoom-transition");

    const templeRect = temple.getBoundingClientRect();
    const columnRect = column.getBoundingClientRect();
    const homeRect = temple.closest(".home-page")?.getBoundingClientRect();
    const currentScale = getCurrentTempleScale();
    const templeCenterX = templeRect.left + (templeRect.width / 2);
    const columnCenterX = columnRect.left + (columnRect.width / 2);

    const naturalColumnX = (columnCenterX - templeCenterX) / currentScale;
    const naturalColumnTop = (columnRect.top - templeRect.top) / currentScale;
    const naturalColumnHeight = columnRect.height / currentScale;
    const { homeTop, zoneTop, zoneBottom } = getTempleFocusZone();
    const availableHeight = Math.max(
      zoneBottom - zoneTop - (pillarFocusPaddingY * 2),
      1
    );

    const homeCenterX = homeRect
      ? homeRect.left + (homeRect.width / 2)
      : window.innerWidth / 2;
    const focusedScale = availableHeight / naturalColumnHeight;

    const targetX =
      (window.innerWidth / 2) -
      homeCenterX -
      (naturalColumnX * focusedScale);
    const focusedColumnHeight = naturalColumnHeight * focusedScale;
    const verticalSpace = Math.max(
      zoneBottom - zoneTop - focusedColumnHeight,
      0
    );
    const targetY =
      zoneTop +
      (verticalSpace * pillarFocusVerticalAlign) -
      homeTop -
      (naturalColumnTop * focusedScale);

    temple.style.setProperty("--mobile-temple-x", `${targetX.toFixed(2)}px`);
    temple.style.setProperty("--mobile-temple-y", `${targetY.toFixed(2)}px`);
    temple.style.setProperty(
      "--mobile-temple-scale",
      focusedScale.toFixed(4)
    );
    temple.classList.add("mobile-temple-focused");
  }

  function focusTempleOnCategory(code, useSlowTransition = false) {
    const drum = getCategoryDrum(code);

    if (!temple || !sheet || !drum) return;

    temple.classList.toggle(
      "mobile-category-zoom-transition",
      useSlowTransition
    );

    const templeRect = temple.getBoundingClientRect();
    const drumRect = drum.getBoundingClientRect();
    const homeRect = temple.closest(".home-page")?.getBoundingClientRect();
    const currentScale = getCurrentTempleScale();
    const templeCenterX = templeRect.left + (templeRect.width / 2);
    const drumCenterX = drumRect.left + (drumRect.width / 2);
    const drumCenterY = drumRect.top + (drumRect.height / 2);

    const naturalDrumX = (drumCenterX - templeCenterX) / currentScale;
    const naturalDrumY = (drumCenterY - templeRect.top) / currentScale;
    const homeTop = homeRect?.top || 0;
    const homeCenterX = homeRect
      ? homeRect.left + (homeRect.width / 2)
      : window.innerWidth / 2;
    const templeZoneBottom = Math.max(homeTop + sheet.offsetTop, 1);
    const targetX =
      (window.innerWidth / 2) -
      homeCenterX -
      (naturalDrumX * categoryFocusScale);
    const targetY =
      (templeZoneBottom / 2) -
      homeTop -
      (naturalDrumY * categoryFocusScale);

    temple.style.setProperty("--mobile-temple-x", `${targetX.toFixed(2)}px`);
    temple.style.setProperty("--mobile-temple-y", `${targetY.toFixed(2)}px`);
    temple.style.setProperty(
      "--mobile-temple-scale",
      categoryFocusScale.toFixed(4)
    );
    temple.classList.add("mobile-temple-focused");
  }

  function resetTemplePosition() {
    if (!temple) return;

    temple.classList.remove("mobile-category-zoom-transition");
    temple.classList.remove("mobile-temple-focused");
    temple.style.removeProperty("--mobile-temple-x");
    temple.style.removeProperty("--mobile-temple-y");
    temple.style.removeProperty("--mobile-temple-scale");
  }

  function setSheetView(viewName) {
    [
      ["welcome", welcomeView],
      ["pillar", selectedView],
      ["category", categoryView]
    ].forEach(([name, view]) => {
      if (!view) return;

      const isHidden = name !== viewName;
      view.hidden = isHidden;
      view.setAttribute("aria-hidden", String(isHidden));
    });
  }

  function transitionSheetView(viewName) {
    if (!sheet || !mobileQuery.matches) {
      setSheetView(viewName);
      return;
    }

    const previousTop = sheet.getBoundingClientRect().top;

    setSheetView(viewName);

    const homeTop = temple?.closest(".home-page")?.getBoundingClientRect().top || 0;
    const newTop = homeTop + sheet.offsetTop;
    const sheetOffset = previousTop - newTop;

    sheet.classList.add("mobile-pillar-sheet-no-transition");
    sheet.style.setProperty(
      "--mobile-pillar-sheet-offset",
      `${sheetOffset.toFixed(2)}px`
    );
    sheet.getBoundingClientRect();

    window.requestAnimationFrame(() => {
      sheet.classList.remove("mobile-pillar-sheet-no-transition");
      sheet.style.setProperty("--mobile-pillar-sheet-offset", "0px");
    });
  }

  function clearPillarHighlight() {
    document
      .querySelectorAll(".pillar-column.pillar-column-zoom-paused")
      .forEach(column => column.classList.remove("pillar-column-zoom-paused"));

    document
      .querySelectorAll(".pillar-buttons button.pillar-button-active")
      .forEach(button => button.classList.remove("pillar-button-active"));
  }

  function highlightPillar(pillar) {
    clearPillarHighlight();

    getPillarColumn(pillar)?.classList.add("pillar-column-zoom-paused");
    document
      .querySelector(`.pillar-buttons button[data-pillar="${pillar}"]`)
      ?.classList.add("pillar-button-active");
  }

  function clearCategoryHighlight() {
    pillarColumns?.classList.remove("mobile-category-focused");

    document
      .querySelectorAll(".pillar-column.mobile-category-active-column")
      .forEach(column => {
        column.classList.remove("mobile-category-active-column");
      });

    document
      .querySelectorAll(".pillar-drum-btn.mobile-drum-active")
      .forEach(drum => drum.classList.remove("mobile-drum-active"));
  }

  function highlightCategory(code) {
    const drum = getCategoryDrum(code);

    clearPillarHighlight();
    clearCategoryHighlight();

    pillarColumns?.classList.add("mobile-category-focused");
    drum?.closest(".pillar-column")?.classList.add(
      "mobile-category-active-column"
    );
    drum?.classList.add("mobile-drum-active");
  }

  function renderCategories(pillar, pillarData) {
    if (!categoryList) return;

    categoryList.replaceChildren();

    Object.entries(pillarData?.drums || {})
      .sort(([leftCode], [rightCode]) => leftCode.localeCompare(rightCode))
      .forEach(([code, drum]) => {
        const categoryIsAvailable =
          pillar === "1" && Boolean(window.pillarCategoryData?.[code]);
        const variationIsAvailable =
          pillar === "2" && availableVariations.includes(code);
        const itemIsAvailable = categoryIsAvailable || variationIsAvailable;
        const item = document.createElement(
          itemIsAvailable ? "button" : "div"
        );

        if (itemIsAvailable) {
          item.type = "button";
          item.dataset.mobileCategory = code;
          item.setAttribute(
            "aria-label",
            `Open ${drum.label} ${variationIsAvailable ? "variation" : "category"}`
          );
        }

        item.className = "mobile-pillar-category-item";
        item.style.setProperty(
          "--category-button-color",
          getMobilePastelColor(drum.color)
        );

        if (!itemIsAvailable) {
          item.classList.add("mobile-pillar-category-unavailable");
        }

        item.textContent = drum.label || "UNKNOWN";
        categoryList.appendChild(item);
      });
  }

  function renderCategoryCreatures(categoryData) {
    if (!categoryCreatureList) return;

    categoryCreatureList.replaceChildren();

    (categoryData?.list || []).forEach(creature => {
      const categoryPillar = Number(categoryData?.pillar || 1);
      const categoryColor =
        window.pillarMapData?.[String(categoryPillar)]
          ?.drums?.[categoryData?.code]?.color ||
        categoryData?.color ||
        "#A5643C";
      const creatureButtonColor =
        categoryPillar >= 2
          ? categoryColor
          : creature.color || categoryColor;
      const creatureImage = window.getCategoryCreatureImagePath?.(creature) || "";
      const item = document.createElement(creatureImage ? "button" : "div");
      const dex = document.createElement("span");
      const name = document.createElement("span");

      item.className = "mobile-category-creature-item";
      item.style.setProperty(
        "--category-button-color",
        getMobilePastelColor(creatureButtonColor)
      );

      if (creatureImage) {
        item.type = "button";
        item.dataset.creatureImage = creatureImage;
        item.dataset.creatureImageAlt =
          `${creature.dexRange || ""} ${creature.label || "UNKNOWN"}`.trim();
        item.setAttribute(
          "aria-label",
          `Open image of ${creature.label || "UNKNOWN"}`
        );
      }

      dex.className = "mobile-category-creature-dex";
      name.className = "mobile-category-creature-name";
      dex.textContent = creature.dexRange || "";
      name.textContent = creature.label || "UNKNOWN";
      item.append(dex, name);
      categoryCreatureList.appendChild(item);
    });
  }

  function syncCarouselButtons() {
    const selectedIndex = availablePillars.indexOf(selectedPillar);

    if (previousButton) {
      previousButton.disabled = selectedIndex <= 0;
    }

    if (nextButton) {
      nextButton.disabled =
        selectedIndex < 0 || selectedIndex >= availablePillars.length - 1;
    }
  }

  function syncCategoryCarouselButtons() {
    const availableDrumCodes = getAvailableDrumCodes();
    const selectedIndex = availableDrumCodes.indexOf(selectedCategory);

    if (categoryUpButton) {
      categoryUpButton.disabled =
        selectedIndex < 0 || selectedIndex >= availableDrumCodes.length - 1;
    }

    if (categoryDownButton) {
      categoryDownButton.disabled = selectedIndex <= 0;
    }
  }

  function showSelectedCategory(code) {
    const categoryData = window.pillarCategoryData?.[code];
    const variationData = window.pillarMapData?.["2"]?.drums?.[code];
    const isOriginsCategory =
      selectedPillar === "1" &&
      availableCategories.includes(code) &&
      Boolean(categoryData);
    const isSecondPillarVariation =
      selectedPillar === "2" &&
      availableVariations.includes(code) &&
      Boolean(variationData);

    if (
      !mobileQuery.matches ||
      (!isOriginsCategory && !isSecondPillarVariation)
    ) {
      return;
    }

    resetMobileScrollPosition();

    const openingCategoryView = selectedCategory === null;
    selectedCategory = code;

    if (sheet) {
      sheet.dataset.mobilePillar = selectedPillar || "";
      sheet.dataset.mobileCategory = code;
    }

    categoryView?.classList.toggle(
      "mobile-variation-coming-soon-view",
      isSecondPillarVariation
    );

    if (variationComingSoon) {
      variationComingSoon.hidden = !isSecondPillarVariation;
    }

    if (openingCategoryView) {
      transitionSheetView("category");
    }

    sheet?.classList.add("mobile-pillar-sheet-selected");
    sheet?.classList.add("mobile-category-sheet-selected");

    if (categoryTitle) {
      categoryTitle.textContent = isSecondPillarVariation
        ? variationData.label
        : categoryData.label;
    }

    if (categoryDex) {
      categoryDex.textContent = isOriginsCategory
        ? categoryData.dexRange || ""
        : variationData.dexRange || "";
    }

    renderCategoryCreatures(isOriginsCategory ? categoryData : null);
    syncCategoryCarouselButtons();
    highlightCategory(code);
    focusTempleOnCategory(code, openingCategoryView);
  }

  function closeSelectedCategory() {
    if (!selectedCategory) return;

    resetMobileScrollPosition();
    selectedCategory = null;

    if (sheet) {
      delete sheet.dataset.mobileCategory;
    }

    transitionSheetView("pillar");
    sheet?.classList.remove("mobile-category-sheet-selected");
    categoryView?.classList.remove("mobile-variation-coming-soon-view");

    if (variationComingSoon) {
      variationComingSoon.hidden = true;
    }

    clearCategoryHighlight();
    highlightPillar(selectedPillar);
    focusTempleOnPillar(selectedPillar);
  }

  function showSelectedPillar(pillar) {
    const pillarData = window.pillarMapData?.[pillar];

    if (!mobileQuery.matches || !pillarData) return;

    resetMobileScrollPosition();

    const openingSelectedView = selectedPillar === null;
    selectedPillar = pillar;

    if (sheet) {
      sheet.dataset.mobilePillar = pillar;
      delete sheet.dataset.mobileCategory;
    }

    if (openingSelectedView) {
      transitionSheetView("pillar");
    }

    sheet?.classList.add("mobile-pillar-sheet-selected");

    if (selectedTitle) {
      selectedTitle.textContent =
        `${pillarData.ordinal}: ${toDisplayTitle(pillarData.title)}`;
    }

    if (selectedDex) {
      selectedDex.textContent = pillarData.matsuDex || "";
    }

    renderCategories(pillar, pillarData);
    syncCarouselButtons();
    highlightPillar(pillar);
    focusTempleOnPillar(pillar);
  }

  function closeSelectedPillar() {
    if (mobileQuery.matches) {
      resetMobileScrollPosition();
    }

    const closingSelectedView = selectedPillar !== null;
    selectedCategory = null;
    selectedPillar = null;

    if (sheet) {
      delete sheet.dataset.mobilePillar;
      delete sheet.dataset.mobileCategory;
    }

    if (closingSelectedView) {
      transitionSheetView("welcome");
    } else {
      setSheetView("welcome");
    }

    sheet?.classList.remove("mobile-pillar-sheet-selected");
    sheet?.classList.remove("mobile-category-sheet-selected");
    categoryView?.classList.remove("mobile-variation-coming-soon-view");

    if (variationComingSoon) {
      variationComingSoon.hidden = true;
    }

    clearCategoryHighlight();
    clearPillarHighlight();
    resetTemplePosition();
  }

  function syncMobileTempleState() {
    if (!temple) return;

    if (mobileQuery.matches) {
      resetMobileScrollPosition();
      temple.setAttribute("inert", "");
      temple.setAttribute("aria-hidden", "true");
      return;
    }

    closeSelectedPillar();
    temple.removeAttribute("inert");
    temple.removeAttribute("aria-hidden");
  }

  function renderMobileHistoryState(mobileState) {
    if (!mobileQuery.matches || !mobileState) return;

    if (mobileState.view === "welcome") {
      closeSelectedPillar();
      return;
    }

    const pillar = String(mobileState.pillar || "");

    if (!availablePillars.includes(pillar)) {
      closeSelectedPillar();
      return;
    }

    if (mobileState.view === "pillar") {
      if (selectedCategory) closeSelectedCategory();
      showSelectedPillar(pillar);
      return;
    }

    const category = String(mobileState.category || "");

    showSelectedPillar(pillar);
    showSelectedCategory(category);
  }

  function initializeMobileHistory() {
    if (!mobileQuery.matches) return;

    const mobileState = getMobileHistoryState();

    if (mobileState) {
      renderMobileHistoryState(mobileState);
      return;
    }

    writeMobileHistoryState("welcome", "replace");
  }

  function navigateBackWithinMobileHistory(currentView, fallbackView, fallback) {
    const mobileState = getMobileHistoryState();

    if (mobileState?.view === currentView) {
      window.history.back();
      return;
    }

    fallback();
    writeMobileHistoryState(fallbackView, "replace");
  }

  document
    .querySelectorAll("[data-mobile-pillar]")
    .forEach(button => {
      button.addEventListener("click", () => {
        const pillar = button.dataset.mobilePillar;

        if (!availablePillars.includes(pillar)) return;
        showSelectedPillar(pillar);
        writeMobileHistoryState("pillar");
      });
    });

  categoryList?.addEventListener("click", event => {
    const button = event.target.closest("[data-mobile-category]");

    if (!button || !categoryList.contains(button)) return;
    showSelectedCategory(button.dataset.mobileCategory);
    writeMobileHistoryState("category");
  });

  previousButton?.addEventListener("click", () => {
    const selectedIndex = availablePillars.indexOf(selectedPillar);
    const previousPillar = availablePillars[selectedIndex - 1];

    if (previousPillar) {
      showSelectedPillar(previousPillar);
      writeMobileHistoryState("pillar", "replace");
    }
  });

  nextButton?.addEventListener("click", () => {
    const selectedIndex = availablePillars.indexOf(selectedPillar);
    const nextPillar = availablePillars[selectedIndex + 1];

    if (nextPillar) {
      showSelectedPillar(nextPillar);
      writeMobileHistoryState("pillar", "replace");
    }
  });

  categoryUpButton?.addEventListener("click", () => {
    const availableDrumCodes = getAvailableDrumCodes();
    const selectedIndex = availableDrumCodes.indexOf(selectedCategory);
    const nextCategory = availableDrumCodes[selectedIndex + 1];

    if (nextCategory) {
      showSelectedCategory(nextCategory);
      writeMobileHistoryState("category", "replace");
    }
  });

  categoryDownButton?.addEventListener("click", () => {
    const availableDrumCodes = getAvailableDrumCodes();
    const selectedIndex = availableDrumCodes.indexOf(selectedCategory);
    const previousCategory = availableDrumCodes[selectedIndex - 1];

    if (previousCategory) {
      showSelectedCategory(previousCategory);
      writeMobileHistoryState("category", "replace");
    }
  });

  backButton?.addEventListener("click", () => {
    navigateBackWithinMobileHistory(
      "pillar",
      "welcome",
      closeSelectedPillar
    );
  });
  categoryBackButton?.addEventListener("click", () => {
    navigateBackWithinMobileHistory(
      "category",
      "pillar",
      closeSelectedCategory
    );
  });

  window.addEventListener("popstate", event => {
    renderMobileHistoryState(getMobileHistoryState(event.state));
  });

  syncMobileTempleState();
  initializeMobileHistory();
  mobileQuery.addEventListener("change", () => {
    syncMobileTempleState();
    initializeMobileHistory();
  });
  window.addEventListener("resize", () => {
    if (!mobileQuery.matches) return;

    if (selectedCategory) {
      focusTempleOnCategory(selectedCategory);
      return;
    }

    if (selectedPillar) {
      focusTempleOnPillar(selectedPillar);
    }
  });
});
