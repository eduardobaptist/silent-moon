const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("mouseover", () => {
  sidebar.classList.add("expanded");
});

sidebar.addEventListener("mouseleave", () => {
  sidebar.classList.remove("expanded");
});
