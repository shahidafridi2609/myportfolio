// Detect scroll event and change navbar background when scrolled
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

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


