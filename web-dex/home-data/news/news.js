const NEWS_VERSION = "0.1.1a";
const NEWS_STORAGE_KEY = "creaturematsu-whats-new-skipped-version";
const NEWS_AUTO_OPEN_DELAY = 3250;
const NEWS_CLOSE_ANIMATION_DURATION = 280;

let newsPopupLastFocusedElement = null;
let newsPopupCloseTimer = null;
let newsPopupFallbackHistoryUsed = false;
const newsPopupDesktopQuery = window.matchMedia("(min-width: 769px)");
const newsPopupMobileQuery = window.matchMedia("(max-width: 768px)");
const NEWS_FALLBACK_HISTORY_KEY = "creatureMatsuNewsPopup";

function renderNewsMarkdown() {
  const content = window.newsInfo?.content || "";

  if (typeof window.parseMarkdown !== "function") {
    return content;
  }

  return window.parseMarkdown(content);
}

function updateNewsScrollCue(popup = document.getElementById("newsPopup")) {
  const content = popup?.querySelector(".news-popup-content");
  const cue = popup?.querySelector(".news-popup-scroll-cue");
  if (!content || !cue) return;

  const hasMoreContent = content.scrollHeight > content.clientHeight + 2;
  const reachedEnd = content.scrollTop + content.clientHeight >= content.scrollHeight - 2;
  const showCue = newsPopupDesktopQuery.matches && hasMoreContent && !reachedEnd;

  cue.classList.toggle("is-visible", showCue);
  cue.setAttribute("aria-hidden", String(!showCue));
  cue.tabIndex = showCue ? 0 : -1;
}

function getNewsFallbackHistoryState(state = window.history.state) {
  if (!state || typeof state !== "object") return null;

  const newsState = state[NEWS_FALLBACK_HISTORY_KEY];
  return newsState && typeof newsState === "object"
    ? newsState
    : null;
}

function prepareNewsHistoryBranch(manualOpen) {
  if (!newsPopupMobileQuery.matches) return false;

  const mobileNavigation = window.creatureMatsuMobileNavigation;

  if (mobileNavigation) {
    mobileNavigation.ensureHomeState();

    if (mobileNavigation.getState()?.view === "news") {
      return true;
    }

    return mobileNavigation.push("news", {
      manual: manualOpen
    });
  }

  const currentState = window.history.state;
  const baseState = currentState && typeof currentState === "object"
    ? currentState
    : {};

  window.history.pushState(
    {
      ...baseState,
      [NEWS_FALLBACK_HISTORY_KEY]: {
        open: true,
        manual: manualOpen
      }
    },
    "",
    window.location.href
  );

  newsPopupFallbackHistoryUsed = true;
  return true;
}

function createNewsPopup() {
  if (document.getElementById("newsPopup")) return;

  document.body.insertAdjacentHTML("beforeend", `
    <div class="news-popup-overlay" id="newsPopup" aria-hidden="true">
      <section
        class="news-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsPopupTitle"
      >
        <header class="news-popup-header">
          <h2 id="newsPopupTitle">What's New</h2>
          <div class="news-popup-version">Version ${NEWS_VERSION}</div>
        </header>



        <div class="news-popup-content-wrap">
          <div class="news-popup-content news-popup-markdown">
            ${renderNewsMarkdown()}
          </div>
          <button
            class="news-popup-scroll-cue"
            type="button"
            aria-label="Scroll release notes down"
            aria-hidden="true"
            tabindex="-1"
          >
            <img src="images/arrow-down2.png" alt="">
          </button>
        </div>



        <footer class="news-popup-actions">
          <button class="news-popup-btn news-popup-skip-btn" type="button">
            Skip
          </button>
          <button class="news-popup-btn news-popup-cancel-btn" type="button">
            Cancel
          </button>
          <button class="news-popup-btn news-popup-back-btn" type="button">
            BACK
          </button>
        </footer>
      </section>
    </div>
  `);
}

function hasSkippedCurrentNews() {
  try {
    return window.localStorage.getItem(NEWS_STORAGE_KEY) === NEWS_VERSION;
  } catch (error) {
    return false;
  }
}

function rememberSkippedCurrentNews() {
  try {
    window.localStorage.setItem(NEWS_STORAGE_KEY, NEWS_VERSION);
  } catch (error) {
    // Storage can be unavailable in private or restricted browser modes.
  }
}

function openNewsPopup(options = {}) {
  const popup = document.getElementById("newsPopup");
  if (!popup) return;

  const manualOpen = options.manual === true;
  const wasActive = popup.classList.contains("active");
  const skipButton = popup.querySelector(".news-popup-skip-btn");
  const cancelButton = popup.querySelector(".news-popup-cancel-btn");
  const backButton = popup.querySelector(".news-popup-back-btn");
  const manualCloseButton = window.matchMedia("(max-width: 768px)").matches
    ? backButton
    : cancelButton;

  newsPopupLastFocusedElement = document.activeElement;
  skipButton.hidden = manualOpen;

  if (!wasActive && options.writeHistory !== false) {
    prepareNewsHistoryBranch(manualOpen);
  }

  window.clearTimeout(newsPopupCloseTimer);
  popup.classList.remove("closing");
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("news-popup-open");
  document.body.classList.add("news-popup-open");

  requestAnimationFrame(() => {
    updateNewsScrollCue(popup);
    (manualOpen ? manualCloseButton : skipButton).focus();
  });
}

function closeNewsPopup(options = {}) {
  const popup = document.getElementById("newsPopup");
  if (!popup || !popup.classList.contains("active")) return;

  if (
    options.fromHistory !== true &&
    window.creatureMatsuMobileNavigation?.backIfCurrent("news")
  ) {
    return;
  }

  if (
    options.fromHistory !== true &&
    newsPopupMobileQuery.matches &&
    getNewsFallbackHistoryState()?.open
  ) {
    window.history.back();
    return;
  }

  window.clearTimeout(newsPopupCloseTimer);
  popup.classList.add("closing");
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");

  const closeDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : NEWS_CLOSE_ANIMATION_DURATION;

  newsPopupCloseTimer = window.setTimeout(() => {
    popup.classList.remove("closing");
    document.documentElement.classList.remove("news-popup-open");
    document.body.classList.remove("news-popup-open");

    if (newsPopupLastFocusedElement?.focus) {
      newsPopupLastFocusedElement.focus();
    }

    newsPopupLastFocusedElement = null;
  }, closeDelay);
}

function skipCurrentNews() {
  rememberSkippedCurrentNews();
  closeNewsPopup();
}

function initNewsPopup() {
  createNewsPopup();

  const popup = document.getElementById("newsPopup");
  const sidebarButton = document.querySelector("[data-open-news]");
  const skipButton = popup.querySelector(".news-popup-skip-btn");
  const cancelButton = popup.querySelector(".news-popup-cancel-btn");
  const backButton = popup.querySelector(".news-popup-back-btn");
  const contentWrap = popup.querySelector(".news-popup-content-wrap");
  const content = popup.querySelector(".news-popup-content");
  const scrollCue = popup.querySelector(".news-popup-scroll-cue");

  sidebarButton?.addEventListener("click", () => {
    openNewsPopup({ manual: true });
  });

  skipButton.addEventListener("click", skipCurrentNews);
  cancelButton.addEventListener("click", closeNewsPopup);
  backButton.addEventListener("click", closeNewsPopup);

  content.addEventListener("scroll", () => {
    updateNewsScrollCue(popup);
  }, { passive: true });

  contentWrap.addEventListener("wheel", event => {
    if (!newsPopupDesktopQuery.matches || event.deltaY === 0) return;

    const previousScrollTop = content.scrollTop;
    content.scrollTop += event.deltaY;

    if (content.scrollTop !== previousScrollTop) {
      event.preventDefault();
    }
  }, { passive: false });

  scrollCue.addEventListener("click", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    content.scrollBy({
      top: Math.max(140, content.clientHeight * 0.72),
      behavior: reducedMotion ? "auto" : "smooth"
    });
  });

  newsPopupDesktopQuery.addEventListener?.("change", () => {
    updateNewsScrollCue(popup);
  });

  window.addEventListener("resize", () => {
    updateNewsScrollCue(popup);
  });

  popup.addEventListener("click", event => {
    if (event.target === popup) closeNewsPopup();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!popup.classList.contains("active")) return;
    closeNewsPopup();
  });

  if (window.creatureMatsuMobileNavigation) {
    const mobileNavigation = window.creatureMatsuMobileNavigation;

    window.addEventListener(mobileNavigation.eventName, event => {
      const navigationState = event.detail?.state;

      if (navigationState?.view === "news") {
        openNewsPopup({
          manual: navigationState.manual === true,
          writeHistory: false
        });
        return;
      }

      closeNewsPopup({ fromHistory: true });
    });
  }

  window.addEventListener("popstate", event => {
    if (!newsPopupFallbackHistoryUsed) return;

    const newsState = getNewsFallbackHistoryState(event.state);

    if (newsState?.open) {
      openNewsPopup({
        manual: newsState.manual === true,
        writeHistory: false
      });
      return;
    }

    closeNewsPopup({ fromHistory: true });
  });

  if (!hasSkippedCurrentNews()) {
    window.addEventListener("load", () => {
      window.setTimeout(() => {
        openNewsPopup({ manual: false });
      }, NEWS_AUTO_OPEN_DELAY);
    }, { once: true });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNewsPopup, { once: true });
} else {
  initNewsPopup();
}
