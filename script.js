const searchForm = document.querySelector(".search-form");
const secondHeader = document.querySelector(".navBar");

document.getElementById("search").onclick = () => {
  searchForm.classList.toggle("active");
  secondHeader.classList.remove("active");
};

document.getElementById("menu").onclick = () => {
  secondHeader.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  secondHeader.classList.remove("active");
};
