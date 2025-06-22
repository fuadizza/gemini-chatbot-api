const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Disable form during API call
  submitButton.disabled = true;
  input.disabled = true;

  // Display user message
  appendMessage('user', userMessage);
  input.value = '';

  // Show loading message
  const loadingMsg = appendMessage('bot', 'Thinking...');
  
  try {
    // Send request to backend API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Remove loading message and show actual response
    loadingMsg.remove();
    appendMessage('bot', data.reply);
    
  } catch (error) {
    console.error('Error:', error);
    loadingMsg.remove();
    appendMessage('bot', 'Sorry, I encountered an error. Please try again.');
  } finally {
    // Re-enable form
    submitButton.disabled = false;
    input.disabled = false;
    input.focus();
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg; // Return the message element so we can remove it if needed
}
