const tableBody = document.querySelector("#uploads-table tbody");

// Example preloaded uploaded files
const uploadedFiles = [
  {
    id: 1,
    teamName: "Team1",
    uploadedAt: "2025-06-10 14:30",
    question: "Question A",
    fileName: "file1.pdf",
    fileURL: "#",
  },
  {
    id: 2,
    teamName: "Team2",
    uploadedAt: "2025-06-10 15:10",
    question: "Question B",
    fileName: "file2.docx",
    fileURL: "#",
  },
  {
    id: 3,
    teamName: "Team3",
    uploadedAt: "2025-06-11 09:50",
    question: "Question C",
    fileName: "file3.jpg",
    fileURL: "#",
  },
];

function renderTable() {
  tableBody.innerHTML = "";
  uploadedFiles.forEach((upload) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${upload.id}</td>
      <td>${upload.teamName}</td>
      <td>${upload.uploadedAt}</td>
      <td>${upload.question}</td>
      <td>${upload.fileName}</td>
      <td><a href="${upload.fileURL}" download="${upload.fileName}" class="download-btn"><i class="fa-solid fa-download"></i></a></td>
    `;
    tableBody.appendChild(tr);
  });
}

// Initial render
renderTable();
