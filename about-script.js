const hamburger = document.querySelector('.mobile-navbar');
const openMenuContainer = document.querySelector('article.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');

hamburger.addEventListener('click', () => {
  openMenuContainer.classList.toggle('d-none');
});

closeMenuBtn.addEventListener('click', () => {
  openMenuContainer.classList.toggle('d-none');
});
