import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage, cart} from "../../data/cart.js";
import {formatCurrency} from "../../../Amazon Project/scripts/utils/money.js";
import {loadProducts, loadProductsFetch} from "../../data/products.js";

describe('test suite: renderOrderSummary function', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
  const productName1 = 'Black and Gray Athletic Cotton Socks - 6 Pairs';
  const productName2 = 'Intermediate Size Basketball';
  const priceCents1 = 1090;
  const priceCents2 = 2095;

  beforeAll(async() => {
    await loadProductsFetch();
  });

  beforeEach(() => { // before each hook yg akan run function sebelum melakukan test (menyusun set up code)
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      <div class="js-checkout-header"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();

    cart.cartItems = [{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
    }];

    renderOrderSummary();
  });

  it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText // innerText ==> hanya ambil textnya sajaa
    ).toContain(2); // utk tau quantity itu terdapat di dalam element tersebut
    
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText 
    ).toContain(1);

    expect(
      document.querySelector(`.js-product-name-${productId1}`).innerText
    ).toEqual(productName1);

    expect(
      document.querySelector(`.js-product-price-${productId1}`).innerText
    ).toEqual(formatCurrency(priceCents1));
  });

  it('remove a product using delete button', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
  
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);

    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);

    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);

    expect(
      document.querySelector(`.js-product-name-${productId2}`).innerText
    ).toEqual(productName2);

    expect(
      document.querySelector(`.js-product-price-${productId2}`).innerText
    ).toEqual(formatCurrency(priceCents2));

    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);
  });

  it('updates the delivery option', () => {
    document.querySelector(`.js-delivery-option-${productId1}-3`).click();

    expect(
      document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked
    ).toEqual(true);

    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual(productId1);
    expect(cart[0].deliveryOptionId).toEqual('3');

    expect(
      document.querySelector('.js-payment-summary-shipping').innerText
    ).toEqual('$14.98');
    expect(
      document.querySelector('.js-payment-summary-total').innerText
    ).toEqual('$63.50');
  });
  
  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = ``;
  });
});

/*
Function hook lain:
afterEach() => runs code after each test
beforeAll() => runs code before all tests
afterAll() => run code after all tests
*/ 

/*
Proses test:
1. Make changes to code
2. Re-run the tests
3. Save to git
*/
