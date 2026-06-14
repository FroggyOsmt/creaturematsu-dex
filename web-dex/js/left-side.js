const drawer = document.getElementById("leftDrawer");
const tab = document.getElementById("leftTab");

function syncDrawerLock() {
  const isOpen = drawer.classList.contains("open");

  document.documentElement.classList.toggle("drawer-locked", isOpen);
  document.body.classList.toggle("drawer-locked", isOpen);
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

document.addEventListener(
  "touchmove",
  (event) => {
    if (!drawer.classList.contains("open")) return;

    /* El sidebar puede recibir toque */
    if (drawer.contains(event.target)) return;

    /* Character/System pueden scrollear */
    if (isAllowedPopupScroll(event.target)) return;

    /* El fondo principal queda bloqueado */
    event.preventDefault();
  },
  { passive: false }
);