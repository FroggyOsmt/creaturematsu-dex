(function initGamesView() {
  const transitionDuration = 340;
  const existingPage = document.getElementById("gamesPage");
  const appContainer = document.querySelector(".app-container");
  const mobileNavigation = window.creatureMatsuMobileNavigation;

  function setupBackButton(page, closeAction) {
    const backButton = page.querySelector("[data-close-games]");
    if (backButton) backButton.onclick = () => closeAction();
  }

  function setupGameButtons(page, isStandalone) {
    const matsuQuizButton = page.querySelector(
      '[data-game-content="matsu-quiz"]'
    );

    if (!matsuQuizButton) return;

    matsuQuizButton.addEventListener("click", () => {
      window.creatureFeatureBadges?.markMatsuQuizSeen();
      window.location.href = isStandalone
        ? "matsu-quiz/matsu-quiz.html"
        : "games/matsu-quiz/matsu-quiz.html";
    });
  }

  function initializeStandalonePage(page) {
    page.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      page.classList.add("active");
    });

    setupBackButton(page, () => {
      page.classList.remove("active");
      page.setAttribute("aria-hidden", "true");

      window.setTimeout(() => {
        window.location.href = "../index.html";
      }, transitionDuration);
    });
    setupGameButtons(page, true);
    window.creatureFeatureBadges?.sync();
  }

  if (existingPage && !appContainer) {
    initializeStandalonePage(existingPage);
    return;
  }

  const trigger = document.querySelector("[data-open-games]");
  const slider = document.getElementById("slider");

  if (!trigger || !slider || !appContainer) return;

  let gamesPage = null;
  let loadPromise = null;

  function loadGamesPage() {
    if (gamesPage) return Promise.resolve(gamesPage);
    if (loadPromise) return loadPromise;

    loadPromise = fetch("games/games.html?v=20261010-matsu-quiz-palette-path")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to load Games (${response.status})`);
        }

        return response.text();
      })
      .then(html => {
        const parsedDocument = new DOMParser().parseFromString(html, "text/html");
        const sourcePage = parsedDocument.getElementById("gamesPage");

        if (!sourcePage) {
          throw new Error("Games page content was not found.");
        }

        gamesPage = document.importNode(sourcePage, true);
        appContainer.appendChild(gamesPage);
        setupBackButton(gamesPage, closeGamesPage);
        setupGameButtons(gamesPage, false);
        window.creatureFeatureBadges?.sync();

        return gamesPage;
      })
      .catch(error => {
        loadPromise = null;
        console.error(error);
        return null;
      });

    return loadPromise;
  }

  async function openGamesPage(options = {}) {
    const page = await loadGamesPage();
    if (!page) return null;
    if (page.classList.contains("active")) return page;

    if (
      document.querySelector(".detail-page.active") &&
      typeof window.closeDetail === "function"
    ) {
      window.closeDetail({ fromHistory: true });
    }

    if (typeof window.closeOthersPage === "function") {
      window.closeOthersPage({ fromHistory: true });
    }

    if (typeof window.setDrawerOpenFromHistory === "function") {
      window.setDrawerOpenFromHistory(false);
    } else {
      const sidebarDrawer = document.getElementById("leftDrawer");
      sidebarDrawer?.classList.remove("open");
      document.documentElement.classList.remove("drawer-locked");
      document.body.classList.remove("drawer-locked");
    }

    page.setAttribute("aria-hidden", "false");
    slider.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-pressed", "true");
    trigger.classList.add("is-active");
    document.body.classList.add("games-view-open");

    requestAnimationFrame(() => {
      slider.classList.add("games-home-hidden");
      page.classList.add("active");
    });

    if (options.writeHistory !== false) {
      mobileNavigation?.push("games");
    }

    return page;
  }

  function closeGamesPage(options = {}) {
    if (!gamesPage || !gamesPage.classList.contains("active")) return;

    if (
      options.fromHistory !== true &&
      mobileNavigation?.backIfCurrent("games")
    ) {
      return;
    }

    gamesPage.classList.remove("active");
    gamesPage.setAttribute("aria-hidden", "true");
    slider.classList.remove("games-home-hidden");
    slider.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-pressed", "false");
    trigger.classList.remove("is-active");
    document.body.classList.remove("games-view-open");

    const windowPanel = gamesPage.querySelector(".games-window");
    if (windowPanel) windowPanel.scrollTop = 0;
  }

  window.openGamesPage = openGamesPage;
  window.closeGamesPage = closeGamesPage;

  trigger.setAttribute("aria-pressed", "false");
  trigger.addEventListener("click", openGamesPage);

  if (mobileNavigation) {
    window.addEventListener(mobileNavigation.eventName, async event => {
      const navigationState = event.detail?.state;

      if (navigationState?.view === "games") {
        await openGamesPage({ writeHistory: false });
        return;
      }

      closeGamesPage({ fromHistory: true });
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeGamesPage();
  });
})();
