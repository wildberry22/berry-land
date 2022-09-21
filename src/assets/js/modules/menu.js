export default function menu(openBtnSelector, basketSelector, closeBtnSelector) {
  const openBtnEl = document.querySelectorAll(openBtnSelector);
  const basketEl = document.querySelector(basketSelector);
  const closeBtnEl = document.querySelectorAll(closeBtnSelector);
  const shadowEl = document.querySelector('.shadow');

  openBtnEl.forEach(openBtn => {
    openBtn.addEventListener('click', () => {
      basketEl.classList.add('active');
      shadowEl.classList.add('active');
      document.querySelector('body').style.overflowY = 'hidden';
    });
  });

  closeBtnEl.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      basketEl.classList.remove('active');
      shadowEl.classList.remove('active');
      document.querySelector('body').style.overflowY = '';
    });
  });

  setInterval(() => {
    if(window.innerWidth > 768 && shadowEl.classList.contains('active') ) {
      basketEl.classList.remove('active');
      shadowEl.classList.remove('active');
      document.querySelector('body').style.overflowY = '';
    }
  }, 100);
}