const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburgerMenu")

hamburger.addEventListener('click', (event) => {
  hamburgerMenu.classList.toggle("active");
});