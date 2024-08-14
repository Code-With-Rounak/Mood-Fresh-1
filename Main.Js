var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
loader.style.display = "none";
})


document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatBox = document.querySelector('.chat-box');

    sendButton.addEventListener('click', function() {
        if (messageInput.value.trim() !== '') {
            const newMessage = document.createElement('div');
            newMessage.classList.add('chat-message');
            newMessage.textContent = messageInput.value;
            chatBox.appendChild(newMessage);
            messageInput.value = '';
        }
    });
});


function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function search(event) {
            if (event.key === "Enter") {
                let searchQuery = document.getElementById("searchbar").value;
                let searchResults = document.getElementById("searchResults");
                searchResults.innerHTML += `<p>${searchQuery}</p>`;
            }
        }

function saveText() {
    let inputText = document.getElementById('inputField').value;
    let savedText = document.getElementById('savedText');
    savedText.innerHTML += `<p>${inputText}</p>`;
  }
