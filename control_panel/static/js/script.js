const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.querySelectorAll(".nav-links li");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const currentPath = window.location.pathname;

navLinks.forEach((li) => {
  const link = li.querySelector("a");
  if (link && link.getAttribute("href") === currentPath) {
    li.classList.add("active");
  } else {
    li.classList.remove("active");
  }
});
