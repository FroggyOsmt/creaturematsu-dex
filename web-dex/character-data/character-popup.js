function openCharacterPopup() {
  document.getElementById("characterPopup")
    .classList.add("active");
}

function closeCharacterPopup() {
  document.getElementById("characterPopup")
    .classList.remove("active");
}

function openCharacterPopupFromSidebar() {
  window.internalReturnTarget = null;
  window.isInternalLinkMode = false;
  openCharacterPopup();
}

document.addEventListener("DOMContentLoaded", () => {
  const characterButtons = document.querySelectorAll(".character-entry-btn");

  characterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.character;

      if (!target) return;

      closeCharacterPopup();

      if (target === "sextuplets") openCharactersPage(characters.sextuplets);
      if (target === "drleezar") openCharactersPage(characters.drleezar);
      if (target === "louise") openCharactersPage(characters.louise);
      if (target === "teseo") openCharactersPage(characters.teseo);
    });
  });
});