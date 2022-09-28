export default function loadJSON(category = 'all') {
  const productsList = document.querySelector('.products-catalog');

  fetch('../products.json')
    .then(response => response.json())
    .then(data => {
      let html = '';

      data.forEach(product => {
        if (product.category == category || category == 'all') {
          html += `
            <article class="product-card" ${typeof(product.price) == 'object' ? 'data-sale' : ''} data-product-type="${product.category}" data-id="${product.id}">
              <h2 class="product-card__title"><a href="#">${product.name}</a></h2>
              <div class="product-card__img">
                <img src="${product.imgSrc}" alt="${product.name}">
              </div>
              <div class="product-card__price-wrapper">
                <div class="product-card__price"> 
                  ${typeof(product.price) == 'object' ? '<div class="product-card__price-new">'+ product.price.newPrice +'</div><div class="product-card__price-old">'+ product.price.oldPrice +'</div>' : product.price}
                </div>
                <div class="product-card__price-weight">за ${product.weight}</div>
              </div>
              <div class="product-card__bottom">
                <div class="product-card__counter">
                  <button class="product-card__counter-minus" data-action="minus">-</button>
                  <div class="product-card__counter-num" data-counter>1</div>
                  <button class="product-card__counter-plus" data-action="plus">+</button>
                </div>
                <button class="btn product-card__basket" data-cart>В корзину</button>
              </div>
            </article>
          `;
        } else {}
      });

      productsList.innerHTML = html;
    })
    .catch(error => {
      alert('User live server or local server');
    });
}