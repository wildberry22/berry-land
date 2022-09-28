export default function toggleCartStatus() {

  const cartWrapper = document.querySelector('.products-basket');
  const goodsWrapper = document.querySelector('.products-basket__goods');

  if(goodsWrapper.children.length > 0) {
    cartWrapper.classList.remove('empty');
  } else {
    cartWrapper.classList.add('empty');
  }

}

