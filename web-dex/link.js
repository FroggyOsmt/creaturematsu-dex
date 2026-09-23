// LINK.JS - Internal links with loop + exact scroll memory

window.internalHistory = [];
window.internalScrollMemory = {};

window.internalRestoreTimers = [];

// INTERNAL LINK STYLE - injected by link.js
(function injectInternalLinkStyle() {
  if (document.getElementById("internal-link-style")) return;

  const style = document.createElement("style");
  style.id = "internal-link-style";

  style.textContent = `
    [data-open-popup] {
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);
})();

function clearInternalRestoreTimers() {
  window.internalRestoreTimers.forEach(timer => clearTimeout(timer));
  window.internalRestoreTimers = [];
}

function getPageType(target) {
  if (target === "pillar" || target === "badge" || target === "matsunian-language" || target === "creature-icon") {
    return "system";
  }

  if (target === "sextuplets" || target === "drleezar" || target === "louise" || target === "teseo") {
    return "characters";
  }

  if (target === "about") {
    return "about";
  }

  if (["action", "sheet", "log", "history", "past", "status", "funfact"].includes(target)) {
    return "extra";
  }

  return null;
}

function makePageKey(type, id = "") {
  if (type === "about") return "about";
  if (!id) return type;
  return `${type}:${id}`;
}

function extraTypeFromReturnId(returnId) {
  return {
    action: "ACTION",
    log: "LOG",
    funfact: "FUN FACT",
    status: "STATUS",
    history: "THE FIRST EXPERIMENT",
    firstexperiment: "THE FIRST EXPERIMENT",
    past: "ABOUT MY PAST",
    sheet: "SHEET"
  }[String(returnId || "").toLowerCase()] || "";
}

function extraReturnIdFromTitle(title) {
  const value = String(title || "").toLowerCase();
  if (value.includes("action")) return "action";
  if (value.includes("fun fact")) return "funfact";
  if (value.includes("first experiment")) return "history";
  if (value.includes("my past")) return "past";
  if (value.includes("status")) return "status";
  if (value.includes("sheet")) return "sheet";
  if (value.includes("log")) return "log";
  return "";
}

function getCurrentSourceKey(from, returnId = "") {
  if (from === "about") return "about";
  if (from === "characters") return makePageKey("characters", returnId);
  if (from === "system") return makePageKey("system", returnId);
  if (from === "extra") return makePageKey("extra", returnId);
  return from;
}

function getTargetKey(target) {
  const type = getPageType(target);
  if (!type) return target;

  if (type === "about") return "about";
  return makePageKey(type, target);
}

function getScrollBoxByKey(key) {
  if (key === "about") {
    return document.querySelector(".about-bg");
  }

  if (key.startsWith("characters:")) {
    return document.querySelector(".characters-bg");
  }

  if (key.startsWith("system:")) {
    return document.querySelector(".system-page-bg");
  }

 if (key.startsWith("extra:")) {
  return document.getElementById("extraPopupBody");
} 

  return null;
}

function saveScrollByKey(key) {
  clearInternalRestoreTimers();

  const box = getScrollBoxByKey(key);
  if (!box) return;

  window.internalScrollMemory[key] = box.scrollTop;
}

function restoreScrollByKey(key) {
  clearInternalRestoreTimers();

  const savedTop = window.internalScrollMemory[key] || 0;

  function applyScroll() {
    const box = getScrollBoxByKey(key);
    if (!box) return;

    box.scrollTop = savedTop;
    box.scrollTo({
      top: savedTop,
      left: 0,
      behavior: "auto"
    });
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(applyScroll);
    });
  });

  window.internalRestoreTimers.push(setTimeout(applyScroll, 80));
  window.internalRestoreTimers.push(setTimeout(applyScroll, 160));
  window.internalRestoreTimers.push(setTimeout(applyScroll, 300));
}

function hideAllInternalPages() {
  document.getElementById("aboutPopup")?.classList.remove("active");
  document.getElementById("charactersPopup")?.classList.remove("active");
  document.getElementById("systemPage")?.classList.remove("active");

  document.getElementById("extraPopup")?.classList.remove("open");

const extraPopup = document.getElementById("extraPopup");
if (extraPopup) extraPopup.style.display = "none";
}

function openPageByKey(key) {
  if (key === "about") {
    openAboutPopup();
    restoreScrollByKey(key);
    return;
  }

  if (key === "characters:sextuplets") {
    openCharactersPage(characters.sextuplets);
    restoreScrollByKey(key);
    return;
  }

  if (key === "characters:drleezar") {
    openCharactersPage(characters.drleezar);
    restoreScrollByKey(key);
    return;
  }

  if (key === "characters:louise") {
    openCharactersPage(characters.louise);
    restoreScrollByKey(key);
    return;
  }

  if (key === "characters:teseo") {
    openCharactersPage(characters.teseo);
    restoreScrollByKey(key);
    return;
  }

  if (key === "system:pillar") {
    openSystemPage(system.pillar);
    restoreScrollByKey(key);
    return;
  }

  if (key === "system:badge") {
    openSystemPage(system.badge);
    restoreScrollByKey(key);
    return;
  }

  if (key === "system:matsunian-language") {
    openSystemPage(system.matsunianLanguage);
    restoreScrollByKey(key);
    return;
  }

  if (key === "system:creature-icon") {
    openSystemPage(system.creatureIcon);
    restoreScrollByKey(key);
    return;
  }

  if (key === "protocol") {
    const popup = document.getElementById("protocolPopup");
    if (popup?.classList.contains("open")) {
      popup.setAttribute("aria-hidden", "false");
      popup.querySelector(".protocol-popup-back")?.focus();
    }
    return;
  }

  if (key.startsWith("extra:")) {
    const returnId = key.slice("extra:".length);
    const type = extraTypeFromReturnId(returnId);
    if (type) {
      openExtraPopup(type);
      restoreScrollByKey(key);
      return;
    }
  }

  if (["drDescription", "description", "functionText", "nameOrigin", "generalOrigin", "reference", "trivia"].includes(key)) {
    // The creature detail stays behind the internal popup, so returning to a
    // main information card only needs to close that popup.
    return;
  }

  console.warn("Page key not found:", key);
}

function openInternalTarget(target) {
  const key = getTargetKey(target);
  openPageByKey(key);
}

window.openInternalLink = function(target, from, returnId = "") {
  const sourceKey = getCurrentActivePageKey() || getCurrentSourceKey(from, returnId);
  const targetKey = getTargetKey(target);

  saveScrollByKey(sourceKey);

  const lastKey = window.internalHistory[window.internalHistory.length - 1];

  if (lastKey === targetKey) {
    window.internalHistory.pop();
    hideAllInternalPages();
    openPageByKey(targetKey);
    return;
  }

  window.internalHistory.push(sourceKey);

  hideAllInternalPages();
  openPageByKey(targetKey);
};

window.backFromInternalLink = function() {
  const currentSystem = document.getElementById("systemPage")?.classList.contains("active");
  const currentCharacters = document.getElementById("charactersPopup")?.classList.contains("active");
  const currentAbout = document.getElementById("aboutPopup")?.classList.contains("active");
  const currentExtra = document.getElementById("extraPopup")?.classList.contains("open");

  if (currentSystem) {
    const title = document.getElementById("systemTitle")?.textContent?.toLowerCase() || "";
    if (title.includes("badge")) saveScrollByKey("system:badge");
    else if (title.includes("pillar")) saveScrollByKey("system:pillar");
    else if (title.includes("matsunian")) saveScrollByKey("system:matsunian-language");
    else if (title.includes("creature icon")) saveScrollByKey("system:creature-icon");
  }

  if (currentCharacters) {
    const title = document.getElementById("charactersTitle")?.textContent?.toLowerCase() || "";
    if (title.includes("sextuplet")) saveScrollByKey("characters:sextuplets");
    else if (title.includes("leezar")) saveScrollByKey("characters:drleezar");
    else if (title.includes("louise")) saveScrollByKey("characters:louise");
    else if (title.includes("teseo")) saveScrollByKey("characters:teseo");
  }

  if (currentAbout) {
    saveScrollByKey("about");
  }

  if (currentExtra) {
    const returnId = extraReturnIdFromTitle(document.getElementById("extraPopupTitle")?.textContent);
    if (returnId) saveScrollByKey(`extra:${returnId}`);
  }

const previousKey = window.internalHistory.pop();

if (previousKey) {
  hideAllInternalPages();
  openPageByKey(previousKey);
  return;
}

if (currentSystem) {
  closeSystemPage?.();
  return;
}

if (currentCharacters) {
  closeCharactersPage?.();
  return;
}

if (currentAbout) {
  openAboutPopup?.();
  return;
}

if (currentExtra) {
  closeExtraPopup?.();
  return;
}

};

window.handleSystemBack = function() {
  if (window.internalHistory.length > 0) {
    return backFromInternalLink();
  }

  return closeSystemPage();
};

window.handleCharactersBack = function() {
  if (window.internalHistory.length > 0) {
    return backFromInternalLink();
  }

  return closeCharactersPage();
};

window.handleExtraBack = function() {
  if (window.internalHistory.length > 0) {
    return backFromInternalLink();
  }

  return closeExtraPopup();
};

document.addEventListener("click", (e) => {
  const normalSystemButton = e.target.closest(".system-entry-btn");
  const normalCharacterButton = e.target.closest(".character-entry-btn");

  if (normalSystemButton || normalCharacterButton) {
    window.internalHistory = [];
    return;
  }

  const link = e.target.closest("[data-open-popup]");
  if (!link) return;

  e.preventDefault();

  const target = link.dataset.openPopup;
  const from = link.dataset.fromPopup;
  const returnId = link.dataset.returnId || "";

  openInternalLink(target, from, returnId);
});

function getCurrentActivePageKey() {
  const aboutActive = document.getElementById("aboutPopup")?.classList.contains("active");
  const charactersActive = document.getElementById("charactersPopup")?.classList.contains("active");
  const systemActive = document.getElementById("systemPage")?.classList.contains("active");

  if (aboutActive) return "about";

  if (charactersActive) {
    const title = document.getElementById("charactersTitle")?.textContent?.toLowerCase() || "";

    if (title.includes("sextuplet")) return "characters:sextuplets";
    if (title.includes("leezar")) return "characters:drleezar";
    if (title.includes("louise")) return "characters:louise";
    if (title.includes("teseo")) return "characters:teseo";

    return "characters";
  }

  if (systemActive) {
    const title = document.getElementById("systemTitle")?.textContent?.toLowerCase() || "";

    if (title.includes("pillar")) return "system:pillar";
    if (title.includes("badge")) return "system:badge";
    if (title.includes("matsunian")) return "system:matsunian-language";
    if (title.includes("creature icon")) return "system:creature-icon";

    return "system";
  }

  const extraActive = document.getElementById("extraPopup")?.classList.contains("open");

  if (extraActive) {
    const returnId = extraReturnIdFromTitle(document.getElementById("extraPopupTitle")?.textContent);
    if (returnId) return `extra:${returnId}`;
  }

  return null;
}
