export default function countCartItems() {
  const cartWrapper = document.querySelector('.products-basket__goods');
  const cartItems = cartWrapper.querySelectorAll('.products-basket__goods-item');

  const itemsCount = cartItems.length;
  
  const basketCircle = document.querySelector('.navigation__basket-num');
  basketCircle.innerText = itemsCount;
}