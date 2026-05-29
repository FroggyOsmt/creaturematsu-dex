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

  systemButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.system;

      if (!target) return;

      closeSystemPopup();

      if (target === "pillar") openSystemPage(system.pillar);
      if (target === "badge") openSystemPage(system.badge);
      if (target === "matsunian-language") openSystemPage(system.matsunianLanguage);
    });
  });
});