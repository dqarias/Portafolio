const hamBug = document.querySelector(' .hamburger');
const navMenu = document.querySelector('.nav_menu');
const body = document.querySelector('body');

hamBug.addEventListener('click', () => {
  hamBug.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  hamBug.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('no-scroll');
}));
