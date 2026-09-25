const TBSA_NEW_STORAGE_KEY = "creaturematsu-tbsa-seen-v0.2.0";

function hideTbsaNewBadge(button) {
  button?.querySelector(".new-feature-badge")?.remove();
  document
    .querySelector(
      '[data-analytics-route="/system"] .new-feature-badge-corner'
    )
    ?.remove();
  document.querySelector(".new-feature-badge-menu")?.remove();
}

function rememberTbsaAsSeen(button) {
  hideTbsaNewBadge(button);

  try {
    localStorage.setItem(TBSA_NEW_STORAGE_KEY, "true");
  } catch (error) {
    // La insignia desaparece igualmente si localStorage no está disponible.
  }

  window.creatureFeatureBadges?.sync();
}

function openSystemPopup() {
  document.getElementById("systemPopup")
    .classList.add("active");
}

function closeSystemPopup() {
  document.getElementById("systemPopup")
    .classList.remove("active");
}

function openSystemPopupFromSidebar() {
  window.internalReturnTarget = null;
  window.isInternalLinkMode = false;
  openSystemPopup();
}

document.addEventListener("DOMContentLoaded", () => {
  const systemButtons = document.querySelectorAll(".system-entry-btn");
  const tbsaButton = document.querySelector('[data-system="tbsa"]');

  try {
    if (localStorage.getItem(TBSA_NEW_STORAGE_KEY) === "true") {
      hideTbsaNewBadge(tbsaButton);
    }
  } catch (error) {
    // Si localStorage está bloqueado, se conserva la insignia de esta carga.
  }

  systemButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.system;

      if (!target) return;

      closeSystemPopup();

      if (target === "pillar") openSystemPage(system.pillar);
      if (target === "badge") openSystemPage(system.badge);
      if (target === "matsunian-language") openSystemPage(system.matsunianLanguage);
      if (target === "creature-icon") openSystemPage(system.creatureIcon);
      if (target === "tbsa") {
        rememberTbsaAsSeen(button);
        openSystemPage(system.tbsa);
      }
    });
  });
});
