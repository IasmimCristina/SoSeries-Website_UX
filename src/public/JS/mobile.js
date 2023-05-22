// Animação do menu hambúguer
const burgerBtn = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.mobile-side')
burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('is-active');
  burgerMenu.classList.toggle('is-active');
})