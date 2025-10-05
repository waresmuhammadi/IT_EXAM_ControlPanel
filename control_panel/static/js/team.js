const addBtn = document.querySelector(".add-team-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.getElementById("add-team-form");
const tableBody = document.querySelector(".team-table tbody");

addBtn.addEventListener("click", () => {
  modal.classList.add("show");
  document.getElementById("team-name").focus();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const teamName = document.getElementById("team-name").value.trim();
  const status = document.getElementById("team-status").value;

  if (!teamName) return;

  const newRow = document.createElement("tr");
  const rowNumber = tableBody.children.length + 1;

  newRow.innerHTML = `
    <td>${rowNumber}</td>
    <td>${teamName}</td>
    <td><span class="status ${status}">${
    status.charAt(0).toUpperCase() + status.slice(1)
  }</span></td>
  `;

  tableBody.appendChild(newRow);

  form.reset();
  modal.classList.remove("show");
});
