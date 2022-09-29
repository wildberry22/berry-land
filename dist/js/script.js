!function(t){var e={};function r(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(o,c,function(e){return t[e]}.bind(null,c));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";const e=document.querySelector(".products-catalog");fetch("../products.json").then(t=>t.json()).then(r=>{let o="";r.forEach(e=>{e.category!=t&&"all"!=t||(o+=`\n            <article class="product-card" ${"object"==typeof e.price?"data-sale":""} data-product-type="${e.category}" data-id="${e.id}">\n              <h2 class="product-card__title"><a href="#">${e.name}</a></h2>\n              <div class="product-card__img">\n                <img src="${e.imgSrc}" alt="${e.name}">\n              </div>\n              <div class="product-card__price-wrapper">\n                <div class="product-card__price"> \n                  ${"object"==typeof e.price?'<div class="product-card__price-new">'+e.price.newPrice+'</div><div class="product-card__price-old">'+e.price.oldPrice+"</div>":e.price}\n                </div>\n                <div class="product-card__price-weight">за ${e.weight}</div>\n              </div>\n              <div class="product-card__bottom">\n                <div class="product-card__counter">\n                  <button class="product-card__counter-minus" data-action="minus">-</button>\n                  <div class="product-card__counter-num" data-counter>1</div>\n                  <button class="product-card__counter-plus" data-action="plus">+</button>\n                </div>\n                <button class="btn product-card__basket" data-cart>В корзину</button>\n              </div>\n            </article>\n          `)}),e.innerHTML=o}).catch(t=>{alert("User live server or local server")})}function c(){const t=document.querySelector(".products-basket__fullprice-num"),e=document.querySelectorAll(".products-basket__goods .products-basket__goods-item");let r=0;e.forEach(t=>{const e=t.querySelector(".products-basket__goods-price .amount"),o=t.querySelector(".products-basket__goods-price .price"),c=parseFloat(e.innerText)*parseFloat(o.innerText);r+=c}),t.innerText=r.toFixed(2)+"₪"}function n(){const t=document.querySelector(".products-basket");document.querySelector(".products-basket__goods").children.length>0?t.classList.remove("empty"):t.classList.add("empty")}function a(){const t=document.querySelector(".products-basket__goods").querySelectorAll(".products-basket__goods-item").length;document.querySelector(".navigation__basket-num").innerText=t}r.r(e),document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".navigation__btn"),e=document.querySelector(".navigation-list--mobile");t.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active")}),setInterval(()=>{window.innerWidth>768&&e.classList.contains("active")&&(t.classList.remove("active"),e.classList.remove("active"))},100),window.innerWidth<=768&&function(t,e,r){const o=document.querySelectorAll(t),c=document.querySelector(e),n=document.querySelectorAll(r),a=document.querySelector(".shadow");o.forEach(t=>{t.addEventListener("click",()=>{c.classList.add("active"),a.classList.add("active"),document.querySelector("body").style.overflowY="hidden"})}),n.forEach(t=>{t.addEventListener("click",()=>{c.classList.remove("active"),a.classList.remove("active"),document.querySelector("body").style.overflowY=""})}),setInterval(()=>{window.innerWidth>768&&a.classList.contains("active")&&(c.classList.remove("active"),a.classList.remove("active"),document.querySelector("body").style.overflowY="")},100)}(".navigation__basket",".products-basket",".products-basket__close-btn"),function(t){const e=document.querySelector(t).querySelectorAll("button");function r(t){e.forEach(e=>{e.classList.remove("active"),e.getAttribute("data-product-type")==t&&e.classList.add("active")})}r("all"),o("all"),e.forEach(t=>{t.addEventListener("click",()=>{r(t.getAttribute("data-product-type")),o(t.getAttribute("data-product-type"))})})}(".products-tabs__list"),window.addEventListener("click",t=>{if("plus"===t.target.dataset.action||"minus"===t.target.dataset.action){const e=t.target.closest(".product-card__counter").querySelector("[data-counter]");"plus"===t.target.dataset.action&&(e.innerText=++e.innerText),"minus"===t.target.dataset.action&&+e.innerText>1&&(e.innerText=--e.innerText)}}),function(){const t=document.querySelector(".products-basket__goods");window.addEventListener("click",e=>{if(e.target.hasAttribute("data-cart")){const r=e.target.closest(".product-card"),o={id:r.dataset.id,title:r.querySelector(".product-card__title").innerText,price:r.querySelector(r.querySelector(".product-card__price-new")?".product-card__price-new":".product-card__price").innerText,counter:r.querySelector("[data-counter]").innerText},s=t.querySelector(`[data-id="${o.id}"]`);if(s){const t=s.querySelector(".amount");t.innerText=+t.innerText+ +o.counter}else{const e=`\n            <li class="products-basket__goods-item" data-id="${o.id}">\n              <button class="products-basket__goods-delete" data-cart-delete>\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M20.25 5.25L3.75 5.25001" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                  <path d="M9.75 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                  <path d="M14.25 9.75V15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                  <path d="M8.25 2.25H15.75" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                  <path d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25" stroke="#DD4456" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n                </svg>\t\t\t\t\t\t\t\t\t\t\t\t\n              </button>\n              <div class="products-basket__goods-content">\n                <p class="products-basket__goods-title">${o.title}</p>\n                <p class="products-basket__goods-price"><span class="amount">${o.counter}</span> x <span class="price">${o.price}</span></p>\n              </div>\n            </li>\n          `;t.insertAdjacentHTML("beforeend",e)}r.querySelector("[data-counter]").innerText=1,n(),c(),a()}})}(),window.addEventListener("click",t=>{(t.target.hasAttribute("data-cart-delete")||t.target.closest("[data-cart-delete]"))&&(t.target.closest(".products-basket__goods-item").remove(),n(),c(),a())})})}]);