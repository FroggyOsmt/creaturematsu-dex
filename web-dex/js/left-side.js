const drawer = document.getElementById("leftDrawer");
const tab = document.getElementById("leftTab");

function syncDrawerLock() {
  const isOpen = drawer.classList.contains("open");

  document.documentElement.classList.toggle("drawer-locked", isOpen);
  document.body.classList.toggle("drawer-locked", isOpen);
}

tab.addEventListener("click", () => {
  drawer.classList.toggle("open");
  syncDrawerLock();
});

document.addEventListener(
  "touchmove",
  (event) => {
    if (!drawer.classList.contains("open")) return;

    if (!drawer.contains(event.target)) {
      event.preventDefault();
    }
  },
  { passive: false }
);