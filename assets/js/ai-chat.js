async function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chatLog");
  const msg = input.value.trim();
  if (!msg) return;
  chat.innerHTML += '<div class="message user">' + msg + '</div>';
  input.value = '';
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });
  const data = await response.json();
  chat.innerHTML += '<div class="message bot">' + data.reply + '</div>';
  chat.scrollTop = chat.scrollHeight;
}
