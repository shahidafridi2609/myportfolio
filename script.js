function toggleMenu() {
  var navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
}

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const subheadingText = "A Web Developer";
  const typewriterElement = document.getElementById("typewriter");
  let charIndex = 0;

  function type() {
    if (charIndex < subheadingText.length) {
      typewriterElement.textContent += subheadingText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 150); // Adjust the typing speed here
    }
  }

  type();
});


