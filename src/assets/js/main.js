import menu from './modules/menu.js';

document.addEventListener("DOMContentLoaded", () => {

  // header adaptive menu
  const navigationBtnEl = document.querySelector('.navigation__btn');
  const navigationEl = document.querySelector('.navigation-list--mobile');

  navigationBtnEl.addEventListener('click', () => {
    navigationBtnEl.classList.toggle('active');
    navigationEl.classList.toggle('active');
  });
  setInterval(() => {
    if(window.innerWidth > 768 && navigationEl.classList.contains('active') ) {
      navigationBtnEl.classList.remove('active');
      navigationEl.classList.remove('active');
    }
  }, 100);

  // menu
  if(window.innerWidth < 768) {
    menu('.navigation__basket', '.products-basket', '.products-basket__close-btn');
  }

});