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
  if (target === "pillar" || target === "badge" || target === "matsunian-language") {
    return "system";
  }

  if (target === "sextuplets" || target === "drleezar" || target === "louise" || target === "teseo") {
    return "characters";
  }

  if (target === "about") {
    return "about";
  }

  return null;
}

function makePageKey(type, id = "") {
  if (type === "about") return "about";
  if (!id) return type;
  return `${type}:${id}`;
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

  if (key === "extra:log") {
  openExtraPopup("LOG");
  restoreScrollByKey(key);
  return;
}

if (key === "extra:funfact") {
  openExtraPopup("FUN FACT");
  restoreScrollByKey(key);
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
  const title = document.getElementById("extraPopupTitle")?.textContent?.toLowerCase() || "";

  if (title.includes("log")) saveScrollByKey("extra:log");
  else if (title.includes("fun fact")) saveScrollByKey("extra:funfact");
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

    return "system";
  }

  const extraActive = document.getElementById("extraPopup")?.classList.contains("open");

if (extraActive) {
  const title = document.getElementById("extraPopupTitle")?.textContent?.toLowerCase() || "";

  if (title.includes("log")) return "extra:log";
  if (title.includes("fun fact")) return "extra:funfact";
}

  return null;
}