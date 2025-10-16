const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");
const contacts = document.querySelectorAll(".contacts-list .contact");

let activeContact = null;

// ==================== DEFAULT MESSAGES PER CONTACT ====================
const messagesData = {
  contact1: [
    { type: "received", text: "Hello! I am contact 1", time: "09:00 AM" },
    { type: "sent", text: "Hi! How are you?", time: "09:01 AM" },
  ],
  contact2: [
    { type: "received", text: "Hey! I am contact 2", time: "10:15 AM" },
    { type: "sent", text: "Hello!", time: "10:16 AM" },
  ],
  contact3: [
    { type: "received", text: "Hi! Contact 3 here.", time: "11:20 AM" },
  ],
};

// ==================== SEND MESSAGE ====================
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text || !activeContact) return;

  const contactId = activeContact.dataset.id;

  // Save message
  if (!messagesData[contactId]) messagesData[contactId] = [];
  messagesData[contactId].push({ type: "sent", text, time: getCurrentTime() });

  renderMessages(contactId);
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

// ==================== RENDER MESSAGES ====================
function renderMessages(contactId) {
  chatMessages.innerHTML = "";
  const msgs = messagesData[contactId] || [];
  msgs.forEach((msg) => {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", msg.type);
    msgDiv.innerHTML = `<p>${msg.text}</p><span class="time">${msg.time}</span>`;
    chatMessages.appendChild(msgDiv);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

contacts.forEach((contact) => {
  contact.addEventListener("click", () => {
    contacts.forEach((c) => c.classList.remove("active"));

    contact.classList.add("active");
    activeContact = contact;

    const contactId = contact.dataset.id;
    renderMessages(contactId);

    const badge = contact.querySelector(".unread-badge");
    if (badge) badge.style.display = "none";
  });
});

// ==================== INITIAL CONTACT SELECTION ====================
if (contacts.length > 0) {
  contacts[0].click();
}
