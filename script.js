const searchForm = document.querySelector(".search-form");
const secondHeader = document.querySelector(".navBar");

document.getElementById("search").onclick = () => {
  searchForm.classList.toggle("active");
};

document.getElementById("menu").onclick = () => {
  secondHeader.classList.toggle("active");
};
