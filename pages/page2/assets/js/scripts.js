const text = "Your text goes here..."; // The text you want to type out
const typingSpeed = 150; // Milliseconds between each letter
const container = document.getElementById('typing-effect');

let index = 0; // Tracks the current position in the text

function typeLetter() {
  if (index < text.length) {
    container.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeLetter, typingSpeed);
  }
}

typeLetter(); // Start the typing effect