(() => {
  const THEME_STORAGE_KEY = "creaturematsu-matsu-quiz-theme";
  const SOUND_STORAGE_KEY = "creaturematsu-matsu-quiz-sounds-enabled";
  const themes = new Set(["system", "light", "dark"]);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const readStoredValue = (key, fallback) => {
    try {
      return window.localStorage.getItem(key) ?? fallback;
    } catch (error) {
      return fallback;
    }
  };

  const saveValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Settings remain active for this visit if storage is unavailable.
    }
  };

  let selectedTheme = readStoredValue(THEME_STORAGE_KEY, "system");
  if (!themes.has(selectedTheme)) selectedTheme = "system";

  const applyTheme = theme => {
    selectedTheme = themes.has(theme) ? theme : "system";
    const effectiveTheme = selectedTheme === "system"
      ? (systemTheme.matches ? "dark" : "light")
      : selectedTheme;

    document.documentElement.dataset.quizTheme = selectedTheme;
    document.documentElement.dataset.quizEffectiveTheme = effectiveTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      effectiveTheme === "dark" ? "#171925" : "#f8f3ef"
    );
  };

  applyTheme(selectedTheme);

  systemTheme.addEventListener?.("change", () => {
    if (selectedTheme === "system") applyTheme("system");
  });

  const initializeMenu = () => {
    const menuButton = document.getElementById("quizMenuButton");
    const menuPopup = document.getElementById("quizMenuPopup");
    const closeButton = document.getElementById("quizMenuClose");
    const themeInputs = Array.from(document.querySelectorAll('input[name="quiz-theme"]'));
    const soundSwitch = document.getElementById("quizSoundSwitch");
    const soundState = document.getElementById("quizSoundState");
    if (!menuButton || !menuPopup || !closeButton || !soundSwitch || !soundState) return;

    let soundEnabled = readStoredValue(SOUND_STORAGE_KEY, "true") !== "false";

    const updateSoundControl = () => {
      soundSwitch.setAttribute("aria-checked", String(soundEnabled));
      soundSwitch.setAttribute(
        "aria-label",
        soundEnabled ? "Disable sound effects" : "Enable sound effects"
      );
      soundState.textContent = soundEnabled ? "Enabled" : "Disabled";
    };

    const closeMenu = ({ restoreFocus = false } = {}) => {
      if (menuPopup.hidden) return;
      menuPopup.hidden = true;
      menuPopup.classList.remove("is-open");
      menuPopup.setAttribute("aria-hidden", "true");
      menuButton.setAttribute("aria-expanded", "false");
      if (restoreFocus) menuButton.focus();
    };

    const openMenu = () => {
      menuPopup.hidden = false;
      menuPopup.classList.add("is-open");
      menuPopup.setAttribute("aria-hidden", "false");
      menuButton.setAttribute("aria-expanded", "true");
      closeButton.focus();
    };

    themeInputs.forEach(input => {
      input.checked = input.value === selectedTheme;
      input.addEventListener("change", () => {
        if (!input.checked) return;
        applyTheme(input.value);
        saveValue(THEME_STORAGE_KEY, selectedTheme);
      });
    });

    updateSoundControl();

    menuButton.addEventListener("click", () => {
      if (menuPopup.hidden) openMenu();
    });

    soundSwitch.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      saveValue(SOUND_STORAGE_KEY, String(soundEnabled));
      updateSoundControl();
      document.dispatchEvent(new CustomEvent("matsuquiz:sound-preference", {
        detail: { enabled: soundEnabled }
      }));
    });

    closeButton.addEventListener("click", () => {
      closeMenu({ restoreFocus: true });
    });

  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeMenu, { once: true });
  } else {
    initializeMenu();
  }
})();
