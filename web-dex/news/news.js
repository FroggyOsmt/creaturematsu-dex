const NEWS_VERSION = "0.1.1";
const NEWS_STORAGE_KEY = "creaturematsu-whats-new-skipped-version";
const NEWS_AUTO_OPEN_DELAY = 3250;
const NEWS_CLOSE_ANIMATION_DURATION = 280;

let newsPopupLastFocusedElement = null;
let newsPopupCloseTimer = null;

function renderNewsMarkdown() {
  const content = window.newsInfo?.content || "";

  if (typeof window.parseMarkdown !== "function") {
    return content;
  }

  return window.parseMarkdown(content);
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



        <div class="news-popup-content news-popup-markdown">
          ${renderNewsMarkdown()}
        </div>



        <footer class="news-popup-actions">
          <button class="news-popup-btn news-popup-skip-btn" type="button">
            Skip
          </button>
          <button class="news-popup-btn news-popup-cancel-btn" type="button">
            Cancel
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
  const skipButton = popup.querySelector(".news-popup-skip-btn");
  const cancelButton = popup.querySelector(".news-popup-cancel-btn");

  newsPopupLastFocusedElement = document.activeElement;
  skipButton.hidden = manualOpen;

  window.clearTimeout(newsPopupCloseTimer);
  popup.classList.remove("closing");
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  document.documentElement.classList.add("news-popup-open");
  document.body.classList.add("news-popup-open");

  requestAnimationFrame(() => {
    (manualOpen ? cancelButton : skipButton).focus();
  });
}

function closeNewsPopup() {
  const popup = document.getElementById("newsPopup");
  if (!popup || !popup.classList.contains("active")) return;

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

  sidebarButton?.addEventListener("click", () => {
    openNewsPopup({ manual: true });
  });

  skipButton.addEventListener("click", skipCurrentNews);
  cancelButton.addEventListener("click", closeNewsPopup);

  popup.addEventListener("click", event => {
    if (event.target === popup) closeNewsPopup();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (!popup.classList.contains("active")) return;
    closeNewsPopup();
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
