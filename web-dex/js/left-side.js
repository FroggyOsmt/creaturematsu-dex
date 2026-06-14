const drawer = document.getElementById("leftDrawer");
const tab = document.getElementById("leftTab");

function isMobileSidebarMode() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function syncDrawerLock() {
  const shouldLock =
    drawer.classList.contains("open") &&
    isMobileSidebarMode();

  document.documentElement.classList.toggle("drawer-locked", shouldLock);
  document.body.classList.toggle("drawer-locked", shouldLock);
}

function isAllowedPopupScroll(target) {
  return target.closest(
    ".about-bg, " +
    ".about-content, " +
    ".about-popup-overlay, " +
    ".characters-bg, " +
    ".system-page-bg, " +
    ".character-popup, " +
    ".system-popup, " +
    ".characters-popup-overlay, " +
    ".system-page-overlay"
  );
}

tab.addEventListener("click", () => {
  drawer.classList.toggle("open");
  syncDrawerLock();
});

window.addEventListener("resize", syncDrawerLock);

document.addEventListener(
  "touchmove",
  (event) => {
    if (!drawer.classList.contains("open")) return;
    if (!isMobileSidebarMode()) return;

    if (drawer.contains(event.target)) return;
    if (isAllowedPopupScroll(event.target)) return;

    event.preventDefault();
  },
  { passive: false }
);