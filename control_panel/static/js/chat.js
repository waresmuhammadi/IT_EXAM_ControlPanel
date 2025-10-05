const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "sent");
  msgDiv.innerHTML = `<p>${text}</p><span class="time">${getCurrentTime()}</span>`;
  chatMessages.appendChild(msgDiv);
  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
}
