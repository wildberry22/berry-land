import loadJSON from './loadJSON.js';

export default function tabs(tabsListSelector) {
  const tabList = document.querySelector(tabsListSelector);
  const btns = tabList.querySelectorAll('button');

  setActive('all');
  loadJSON('all');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(btn.getAttribute('data-product-type'));
      // product-card creation
      loadJSON(btn.getAttribute('data-product-type'));
    });
  });

  function setActive(category) {
    btns.forEach(btn => {
      btn.classList.remove('active');
      if(btn.getAttribute('data-product-type') == category) btn.classList.add('active');
    });
  }

} 