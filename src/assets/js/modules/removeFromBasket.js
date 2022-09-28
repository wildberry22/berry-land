import calcCartPrice from "./calcCartPrice.js";
import toggleCartStatus from "./toggleCartStatus.js";
import countCartItems from "./countCartItems.js";

export default function removeFromBasket() {

  window.addEventListener('click', e => {
    if(e.target.hasAttribute('data-cart-delete') || e.target.closest('[data-cart-delete]')) {

      e.target.closest('.products-basket__goods-item').remove();

      toggleCartStatus();
      calcCartPrice();
      countCartItems();
    }
  });
}