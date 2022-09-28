export default function productCounter() {

  window.addEventListener('click', e => {
    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
      const counterWrapper = e.target.closest('.product-card__counter');
      const counter = counterWrapper.querySelector('[data-counter]');
  
      if(e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
      }
      
      if(e.target.dataset.action === 'minus') {
        if (+counter.innerText > 1) {
          counter.innerText = --counter.innerText;
        }
      }
    }
  });
  
}


