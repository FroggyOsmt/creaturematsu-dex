(() => {
  const historyKey = "creatureMatsuMobileNavigation";
  const eventName = "creaturematsu-mobile-navigation";
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  function isMobile() {
    return mobileQuery.matches;
  }

  function getState(state = window.history.state) {
    if (!state || typeof state !== "object") return null;

    const navigationState = state[historyKey];

    if (
      !navigationState ||
      typeof navigationState !== "object" ||
      typeof navigationState.view !== "string"
    ) {
      return null;
    }

    return navigationState;
  }

  function getDepth(state = getState()) {
    return Number.isInteger(state?.depth) && state.depth >= 0
      ? state.depth
      : null;
  }

  function getBaseHistoryState() {
    const currentState = window.history.state;
    return currentState && typeof currentState === "object"
      ? currentState
      : {};
  }

  function ensureHomeState() {
    if (!isMobile()) return false;

    const currentNavigationState = getState();

    if (currentNavigationState) {
      if (
        currentNavigationState.view === "home" &&
        getDepth(currentNavigationState) === null
      ) {
        window.history.replaceState(
          {
            ...getBaseHistoryState(),
            [historyKey]: {
              ...currentNavigationState,
              depth: 0
            }
          },
          "",
          window.location.href
        );
      }

      return true;
    }

    window.history.replaceState(
      {
        ...getBaseHistoryState(),
        [historyKey]: { view: "home", depth: 0 }
      },
      "",
      window.location.href
    );

    return true;
  }

  function writeState(view, data = {}, mode = "push") {
    if (!isMobile() || typeof view !== "string" || !view) return false;

    ensureHomeState();

    const currentNavigationState = getState();
    const currentDepth = getDepth(currentNavigationState);
    const nextDepth = view === "home"
      ? 0
      : mode === "replace"
        ? currentDepth ?? 1
        : (currentDepth ?? 0) + 1;
    const nextNavigationState = { view, ...data, depth: nextDepth };

    if (
      mode === "push" &&
      JSON.stringify(currentNavigationState) === JSON.stringify(nextNavigationState)
    ) {
      return false;
    }

    const nextState = {
      ...getBaseHistoryState(),
      [historyKey]: nextNavigationState
    };

    if (mode === "replace") {
      window.history.replaceState(nextState, "", window.location.href);
    } else {
      window.history.pushState(nextState, "", window.location.href);
    }

    return true;
  }

  function push(view, data = {}) {
    return writeState(view, data, "push");
  }

  function replace(view, data = {}) {
    return writeState(view, data, "replace");
  }

  function backIfCurrent(view) {
    if (!isMobile()) return false;
    if (getState()?.view !== view) return false;

    window.history.back();
    return true;
  }

  function goHome() {
    if (!isMobile()) return false;

    ensureHomeState();

    const currentNavigationState = getState();
    const currentDepth = getDepth(currentNavigationState);

    if (currentDepth !== null && currentDepth > 0) {
      window.history.go(-currentDepth);
      return true;
    }

    if (currentNavigationState?.view !== "home") {
      replace("home");
    }

    dispatchNavigationState(window.history.state, "home-control");
    return true;
  }

  function dispatchNavigationState(state, source) {
    window.dispatchEvent(new CustomEvent(eventName, {
      detail: {
        state: getState(state),
        source
      }
    }));
  }

  window.creatureMatsuMobileNavigation = {
    eventName,
    isMobile,
    getState,
    ensureHomeState,
    push,
    replace,
    backIfCurrent,
    goHome
  };

  window.addEventListener("popstate", event => {
    dispatchNavigationState(event.state, "popstate");
  });

  mobileQuery.addEventListener?.("change", event => {
    if (event.matches) ensureHomeState();
  });

  ensureHomeState();

  const dispatchInitialState = () => {
    window.setTimeout(() => {
      dispatchNavigationState(window.history.state, "initial");
    }, 0);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", dispatchInitialState, { once: true });
  } else {
    dispatchInitialState();
  }
})();
