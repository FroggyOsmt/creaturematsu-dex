const MAINTENANCE_MODE = false;

(() => {
  if (!MAINTENANCE_MODE) return;
  if (document.getElementById("maintenanceScreen")) return;

  const screen = document.createElement("main");
  const logo = document.createElement("img");
  const message = document.createElement("p");

  screen.id = "maintenanceScreen";
  screen.setAttribute("role", "status");
  screen.setAttribute("aria-live", "polite");

  logo.className = "maintenance-logo";
  logo.src = "images/creature-logo.png";
  logo.alt = "CreatureMatsu";

  message.className = "maintenance-message";
  message.textContent =
    "CreatureMatsu is currently under maintenance. Please come back later.";

  screen.append(logo, message);
  document.documentElement.classList.add("maintenance-mode");
  document.body.prepend(screen);
})();
