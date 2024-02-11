const menu = document.querySelector(".menu>img");
const links = document.querySelector(".links");

menu.onclick = () => {
  links.classList.toggle('active');
};