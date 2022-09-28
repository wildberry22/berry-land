export default function calcCartPrice() {
  const totalPriceEl = document.querySelector('.products-basket__fullprice-num');
  const cartItems = document.querySelectorAll('.products-basket__goods .products-basket__goods-item');

  let totalPrice = 0;

  cartItems.forEach(item => {
    const amountEl = item.querySelector('.products-basket__goods-price .amount');
    const priceEl = item.querySelector('.products-basket__goods-price .price');
    
    const currentPrice = parseFloat(amountEl.innerText) * parseFloat(priceEl.innerText);

    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice.toFixed(2) + '₪';
}