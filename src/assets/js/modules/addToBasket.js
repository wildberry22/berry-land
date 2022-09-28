import calcCartPrice from "./calcCartPrice.js";
import toggleCartStatus from "./toggleCartStatus.js";
import countCartItems from "./countCartItems.js";

export default function addToBasket() {
  
  const cartWrapper = document.querySelector('.products-basket__goods');

  window.addEventListener('click', e => { 
    if(e.target.hasAttribute('data-cart')) {
      const card = e.target.closest('.product-card');

      const productInfo = {
        id: card.dataset.id,
        title: card.querySelector('.product-card__title').innerText,
        price: card.querySelector(card.querySelector('.product-card__price-new') ? '.product-card__price-new' : '.product-card__price').innerText,
        counter: card.querySelector('[data-counter]').innerText
      };

      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
          const counterEl = itemInCart.querySelector('.amount');
          counterEl.innerText = +counterEl.innerText + +productInfo.counter;
        } else {
          const cartItemHTML = `
            <li class="products-basket__goods-item" data-id="${productInfo.id}">
              <button class="products-basket__goods-delete" data-cart-delete>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 5.25L3.75 5.25001" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.75 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.25 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.25 2.25H15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>												
              </button>
              <div class="products-basket__goods-content">
                <p class="products-basket__goods-title">${productInfo.title}</p>
                <p class="products-basket__goods-price"><span class="amount">${productInfo.counter}</span> x <span class="price">${productInfo.price}</span></p>
              </div>
            </li>
          `;

          cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        card.querySelector('[data-counter]').innerText = 1;

        toggleCartStatus();
        calcCartPrice();
        countCartItems();
    }
  });
  
}


