const drawer = document.getElementById("leftDrawer");
const tab = document.getElementById("leftTab");
const homeLogo = drawer.querySelector(".left-logo");

function isMobileSidebarMode() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function syncMobileDrawerSearchState() {
  const shouldHideSearch =
    isMobileSidebarMode() &&
    (drawer.classList.contains("open") ||
      drawer.classList.contains("dragging"));

  document.body.classList.toggle(
    "mobile-drawer-active",
    shouldHideSearch
  );

  const searchInput = document.querySelector(".creature-search");
  if (shouldHideSearch && document.activeElement === searchInput) {
    searchInput.blur();
  }
}

function syncDrawerLock() {
  const shouldLock =
    drawer.classList.contains("open") &&
    isMobileSidebarMode();

  document.documentElement.classList.toggle("drawer-locked", shouldLock);
  document.body.classList.toggle("drawer-locked", shouldLock);
  syncMobileDrawerSearchState();
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
    ".system-page-overlay, " +
    ".news-popup-overlay, " +
    ".news-popup, " +
    ".news-popup-content-wrap, " +
    ".news-popup-content"
  );
}

const MOBILE_DRAWER_SWIPE_THRESHOLD = 35;
let drawerGesture = null;
let wasMobileSidebarMode = isMobileSidebarMode();

function applyDrawerOpen(shouldOpen) {
  drawer.classList.toggle("open", shouldOpen);
  syncDrawerLock();
  syncHomeLogoControl();
}

function syncHomeLogoControl() {
  if (!homeLogo) return;

  const isOthersHomeControl =
    isMobileSidebarMode() &&
    drawer.classList.contains("open") &&
    document.body.classList.contains("others-view-open");

  drawer.classList.toggle("others-logo-home-active", isOthersHomeControl);

  if (isOthersHomeControl) {
    homeLogo.setAttribute("role", "button");
    homeLogo.setAttribute("tabindex", "0");
    homeLogo.setAttribute("aria-label", "BACK TO HOME");
    homeLogo.removeAttribute("aria-hidden");
    return;
  }

  homeLogo.removeAttribute("role");
  homeLogo.removeAttribute("aria-label");
  homeLogo.setAttribute("tabindex", "-1");
  homeLogo.setAttribute("aria-hidden", "true");
}

function goHomeFromLogo() {
  if (
    !isMobileSidebarMode() ||
    !drawer.classList.contains("others-logo-home-active")
  ) {
    return;
  }

  const mobileNavigation = window.creatureMatsuMobileNavigation;

  if (mobileNavigation?.goHome()) return;
  applyDrawerOpen(false);
}

function setDrawerOpen(shouldOpen, options = {}) {
  const isOpen = drawer.classList.contains("open");
  const mobileNavigation = window.creatureMatsuMobileNavigation;

  if (
    options.fromHistory !== true &&
    isMobileSidebarMode() &&
    shouldOpen !== isOpen
  ) {
    if (shouldOpen) {
      mobileNavigation?.push("drawer");
    } else {
      applyDrawerOpen(false);

      if (mobileNavigation?.backIfCurrent("drawer")) {
        return;
      }
    }
  }

  applyDrawerOpen(shouldOpen);
}

window.setDrawerOpenFromHistory = shouldOpen => {
  setDrawerOpen(shouldOpen, { fromHistory: true });
};

function beginDrawerGesture(inputId, clientX, usesPointerCapture = false) {
  if (!isMobileSidebarMode()) return false;

  const drawerWidth = drawer.getBoundingClientRect().width;
  const startOpen = drawer.classList.contains("open");

  drawerGesture = {
    inputId,
    startX: clientX,
    startOpen,
    drawerWidth,
    deltaX: 0,
    usesPointerCapture
  };

  drawer.classList.add("dragging");
  syncMobileDrawerSearchState();
  drawer.style.left = `${startOpen ? 0 : -drawerWidth}px`;
  return true;
}

function moveDrawerGesture(inputId, clientX) {
  if (!drawerGesture || drawerGesture.inputId !== inputId) return false;

  const deltaX = clientX - drawerGesture.startX;
  const startLeft = drawerGesture.startOpen ? 0 : -drawerGesture.drawerWidth;
  const nextLeft = Math.max(
    -drawerGesture.drawerWidth,
    Math.min(0, startLeft + deltaX)
  );

  drawerGesture.deltaX = deltaX;
  drawer.style.left = `${nextLeft}px`;
  return true;
}

function finishDrawerGesture(inputId, cancelled = false) {
  if (!drawerGesture || drawerGesture.inputId !== inputId) return;

  const { startOpen, deltaX, usesPointerCapture } = drawerGesture;
  const movedEnough = Math.abs(deltaX) >= MOBILE_DRAWER_SWIPE_THRESHOLD;
  const shouldOpen = cancelled || !movedEnough ? startOpen : deltaX > 0;

  drawerGesture = null;
  drawer.classList.remove("dragging");
  setDrawerOpen(shouldOpen);

  if (usesPointerCapture && tab.hasPointerCapture(inputId)) {
    tab.releasePointerCapture(inputId);
  }

  requestAnimationFrame(() => {
    drawer.style.removeProperty("left");
  });
}

tab.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  if (!beginDrawerGesture(event.pointerId, event.clientX, true)) return;
  tab.setPointerCapture(event.pointerId);
  event.preventDefault();
});

tab.addEventListener("pointermove", (event) => {
  if (!moveDrawerGesture(event.pointerId, event.clientX)) return;
  event.preventDefault();
});

tab.addEventListener("pointerup", (event) => {
  finishDrawerGesture(event.pointerId);
});

tab.addEventListener("pointercancel", (event) => {
  finishDrawerGesture(event.pointerId, true);
});

tab.addEventListener("lostpointercapture", (event) => {
  finishDrawerGesture(event.pointerId, true);
});

if (!("PointerEvent" in window)) {
  const mouseGestureId = "mouse";

  function getTouchGestureId(touch) {
    return `touch-${touch.identifier}`;
  }

  function findActiveTouch(event) {
    if (!drawerGesture || typeof drawerGesture.inputId !== "string") return null;
    if (!drawerGesture.inputId.startsWith("touch-")) return null;

    const identifier = Number(drawerGesture.inputId.slice(6));
    return Array.from(event.changedTouches).find(
      (touch) => touch.identifier === identifier
    ) || Array.from(event.touches).find(
      (touch) => touch.identifier === identifier
    );
  }

  tab.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;

    const touch = event.changedTouches[0];
    if (!beginDrawerGesture(getTouchGestureId(touch), touch.clientX)) return;
    event.preventDefault();
  }, { passive: false });

  tab.addEventListener("touchmove", (event) => {
    const touch = findActiveTouch(event);
    if (!touch) return;
    if (!moveDrawerGesture(getTouchGestureId(touch), touch.clientX)) return;
    event.preventDefault();
  }, { passive: false });

  tab.addEventListener("touchend", (event) => {
    const touch = findActiveTouch(event);
    if (!touch) return;
    finishDrawerGesture(getTouchGestureId(touch));
  });

  tab.addEventListener("touchcancel", (event) => {
    const touch = findActiveTouch(event);
    if (!touch) return;
    finishDrawerGesture(getTouchGestureId(touch), true);
  });

  tab.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    if (!beginDrawerGesture(mouseGestureId, event.clientX)) return;
    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!moveDrawerGesture(mouseGestureId, event.clientX)) return;
    event.preventDefault();
  });

  window.addEventListener("mouseup", (event) => {
    if (event.button !== 0) return;
    finishDrawerGesture(mouseGestureId);
  });
}

tab.addEventListener("click", (event) => {
  if (isMobileSidebarMode()) {
    event.preventDefault();
    return;
  }

  setDrawerOpen(!drawer.classList.contains("open"));
});

homeLogo?.addEventListener("click", goHomeFromLogo);

homeLogo?.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  goHomeFromLogo();
});

syncHomeLogoControl();
syncDrawerLock();

if (window.creatureMatsuMobileNavigation) {
  const mobileNavigation = window.creatureMatsuMobileNavigation;

  window.addEventListener(mobileNavigation.eventName, event => {
    setDrawerOpen(event.detail?.state?.view === "drawer", {
      fromHistory: true
    });

    requestAnimationFrame(syncHomeLogoControl);
  });
}

window.addEventListener("resize", () => {
  const isMobileNow = isMobileSidebarMode();

  syncHomeLogoControl();

  if (drawerGesture) {
    const { inputId } = drawerGesture;
    finishDrawerGesture(inputId, true);
  }

  if (
    !wasMobileSidebarMode &&
    isMobileNow &&
    drawer.classList.contains("open")
  ) {
    const mobileNavigation = window.creatureMatsuMobileNavigation;
    const currentView = mobileNavigation?.getState()?.view;

    if (!currentView || currentView === "home") {
      mobileNavigation?.push("drawer");
    }
  }

  wasMobileSidebarMode = isMobileNow;

  syncDrawerLock();
});

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
