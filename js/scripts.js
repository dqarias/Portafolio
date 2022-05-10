const hamBug=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav_menu");

hamBug.addEventListener("click", () => {
  hamBug.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
  addEventListener("click", () => {
    hamBug.classList.remove("active");
    navMenu.classList.remove("active");
  }))