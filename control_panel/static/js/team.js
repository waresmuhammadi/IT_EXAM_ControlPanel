const addBtn = document.querySelector(".add-team-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("add-team-form");
const tableBody = document.querySelector(".team-table tbody");

// Show modal
addBtn.addEventListener("click", () => {
  modal.classList.add("show");
  document.getElementById("team-name").focus();
});

// Hide modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const teamName = document.getElementById("team-name").value.trim();
  const username = document.getElementById("team-username").value.trim();
  const password = document.getElementById("team-password").value.trim();
  const members = document.getElementById("team-members").value.trim();
  const status = document.getElementById("team-status").value;

  const rowNumber = tableBody.children.length + 1;
  const createdAt = new Date().toLocaleString();
  const isLogin = status === "True";

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowNumber}</td>
    <td>${teamName}</td>
    <td>${username}</td>
    <td>0</td>
    <td>${createdAt}</td>
    <td>
      <span class="status ${isLogin ? "login" : "logout"}">
        ${isLogin ? "Login" : "Logout"}
      </span>
    </td>
    <td>
      <a href="#" class="user_delete btn"><i class="fas fa-trash"></i></a>
    </td>
  `;

  tableBody.appendChild(newRow);

  form.reset();
  modal.classList.remove("show");
});
