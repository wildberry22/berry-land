/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ "./src/assets/js/modules/menu.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/assets/js/modules/tabs.js");
/* harmony import */ var _modules_productCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/productCounter.js */ "./src/assets/js/modules/productCounter.js");
/* harmony import */ var _modules_addToBasket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addToBasket.js */ "./src/assets/js/modules/addToBasket.js");
/* harmony import */ var _modules_removeFromBasket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/removeFromBasket.js */ "./src/assets/js/modules/removeFromBasket.js");





document.addEventListener("DOMContentLoaded", () => {
  // header adaptive menu
  const navigationBtnEl = document.querySelector('.navigation__btn');
  const navigationEl = document.querySelector('.navigation-list--mobile');
  navigationBtnEl.addEventListener('click', () => {
    navigationBtnEl.classList.toggle('active');
    navigationEl.classList.toggle('active');
  });
  setInterval(() => {
    if (window.innerWidth > 768 && navigationEl.classList.contains('active')) {
      navigationBtnEl.classList.remove('active');
      navigationEl.classList.remove('active');
    }
  }, 100); // menu

  if (window.innerWidth <= 768) {
    Object(_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.navigation__basket', '.products-basket', '.products-basket__close-btn');
  } // sorting products by categories and card creation


  Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.products-tabs__list'); // working buttons on counter

  Object(_modules_productCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_addToBasket_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_removeFromBasket_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/assets/js/modules/addToBasket.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/addToBasket.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addToBasket; });
/* harmony import */ var _calcCartPrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcCartPrice.js */ "./src/assets/js/modules/calcCartPrice.js");
/* harmony import */ var _toggleCartStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleCartStatus.js */ "./src/assets/js/modules/toggleCartStatus.js");
/* harmony import */ var _countCartItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countCartItems.js */ "./src/assets/js/modules/countCartItems.js");



function addToBasket() {
  const cartWrapper = document.querySelector('.products-basket__goods');
  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart')) {
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
      Object(_toggleCartStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_calcCartPrice_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      Object(_countCartItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });
}

/***/ }),

/***/ "./src/assets/js/modules/calcCartPrice.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/calcCartPrice.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcCartPrice; });
function calcCartPrice() {
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

/***/ }),

/***/ "./src/assets/js/modules/countCartItems.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/countCartItems.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return countCartItems; });
function countCartItems() {
  const cartWrapper = document.querySelector('.products-basket__goods');
  const cartItems = cartWrapper.querySelectorAll('.products-basket__goods-item');
  const itemsCount = cartItems.length;
  const basketCircle = document.querySelector('.navigation__basket-num');
  basketCircle.innerText = itemsCount;
}

/***/ }),

/***/ "./src/assets/js/modules/loadJSON.js":
/*!*******************************************!*\
  !*** ./src/assets/js/modules/loadJSON.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadJSON; });
function loadJSON() {
  let category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
  const productsList = document.querySelector('.products-catalog');
  fetch('../products.json').then(response => response.json()).then(data => {
    let html = '';
    data.forEach(product => {
      if (product.category == category || category == 'all') {
        html += `
            <article class="product-card" ${typeof product.price == 'object' ? 'data-sale' : ''} data-product-type="${product.category}" data-id="${product.id}">
              <h2 class="product-card__title"><a href="#">${product.name}</a></h2>
              <div class="product-card__img">
                <img src="${product.imgSrc}" alt="${product.name}">
              </div>
              <div class="product-card__price-wrapper">
                <div class="product-card__price"> 
                  ${typeof product.price == 'object' ? '<div class="product-card__price-new">' + product.price.newPrice + '</div><div class="product-card__price-old">' + product.price.oldPrice + '</div>' : product.price}
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
  }).catch(error => {
    alert('User live server or local server');
  });
}

/***/ }),

/***/ "./src/assets/js/modules/menu.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
function menu(openBtnSelector, basketSelector, closeBtnSelector) {
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
    if (window.innerWidth > 768 && shadowEl.classList.contains('active')) {
      basketEl.classList.remove('active');
      shadowEl.classList.remove('active');
      document.querySelector('body').style.overflowY = '';
    }
  }, 100);
}

/***/ }),

/***/ "./src/assets/js/modules/productCounter.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/productCounter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productCounter; });
function productCounter() {
  window.addEventListener('click', e => {
    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
      const counterWrapper = e.target.closest('.product-card__counter');
      const counter = counterWrapper.querySelector('[data-counter]');

      if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
      }

      if (e.target.dataset.action === 'minus') {
        if (+counter.innerText > 1) {
          counter.innerText = --counter.innerText;
        }
      }
    }
  });
}

/***/ }),

/***/ "./src/assets/js/modules/removeFromBasket.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/removeFromBasket.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeFromBasket; });
/* harmony import */ var _calcCartPrice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcCartPrice.js */ "./src/assets/js/modules/calcCartPrice.js");
/* harmony import */ var _toggleCartStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggleCartStatus.js */ "./src/assets/js/modules/toggleCartStatus.js");
/* harmony import */ var _countCartItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countCartItems.js */ "./src/assets/js/modules/countCartItems.js");



function removeFromBasket() {
  window.addEventListener('click', e => {
    if (e.target.hasAttribute('data-cart-delete') || e.target.closest('[data-cart-delete]')) {
      e.target.closest('.products-basket__goods-item').remove();
      Object(_toggleCartStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      Object(_calcCartPrice_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      Object(_countCartItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  });
}

/***/ }),

/***/ "./src/assets/js/modules/tabs.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/tabs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs; });
/* harmony import */ var _loadJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadJSON.js */ "./src/assets/js/modules/loadJSON.js");

function tabs(tabsListSelector) {
  const tabList = document.querySelector(tabsListSelector);
  const btns = tabList.querySelectorAll('button');
  setActive('all');
  Object(_loadJSON_js__WEBPACK_IMPORTED_MODULE_0__["default"])('all');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(btn.getAttribute('data-product-type')); // product-card creation

      Object(_loadJSON_js__WEBPACK_IMPORTED_MODULE_0__["default"])(btn.getAttribute('data-product-type'));
    });
  });

  function setActive(category) {
    btns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-product-type') == category) btn.classList.add('active');
    });
  }
}

/***/ }),

/***/ "./src/assets/js/modules/toggleCartStatus.js":
/*!***************************************************!*\
  !*** ./src/assets/js/modules/toggleCartStatus.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleCartStatus; });
function toggleCartStatus() {
  const cartWrapper = document.querySelector('.products-basket');
  const goodsWrapper = document.querySelector('.products-basket__goods');

  if (goodsWrapper.children.length > 0) {
    cartWrapper.classList.remove('empty');
  } else {
    cartWrapper.classList.add('empty');
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map