const form = document.getElementById("upload-form");
const previewContainer = document.getElementById("preview-container");
const fileInput = document.getElementById("file-input");

fileInput.addEventListener("change", (e) => {
  const file = fileInput.files[0];
  if (!file) return;

  previewContainer.textContent = `Selected file: ${file.name}`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const option = document.getElementById("file-option").value;
  const file = fileInput.files[0];

  if (!option || !file) {
    alert("Please select an option and a file.");
    return;
  }

  alert(`Option: ${option}\nFile: ${file.name}\nUploaded successfully!`);
  form.reset();
  previewContainer.textContent = "";
});
