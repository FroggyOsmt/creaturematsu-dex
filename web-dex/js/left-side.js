const drawer = document.getElementById("leftDrawer");
const tab = document.getElementById("leftTab");

tab.addEventListener("click", () => {
  drawer.classList.toggle("open");
});