const prototypeSidebar = document.getElementById("prototypeSidebar");
const prototypeSidebarTab = document.getElementById("prototypeSidebarTab");

function togglePrototypeSidebar() {
  const isOpen = prototypeSidebar.classList.toggle("open");
  prototypeSidebarTab.setAttribute("aria-expanded", String(isOpen));
}

prototypeSidebarTab.addEventListener("click", togglePrototypeSidebar);

prototypeSidebarTab.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  togglePrototypeSidebar();
});
