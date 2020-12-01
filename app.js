const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll(" a");
const html = document.querySelector('html');

burger.addEventListener('click', () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
     html.classList.toggle('no-scroll');
});
links.forEach(link => {
link.addEventListener("click", ()=>{
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});
});
