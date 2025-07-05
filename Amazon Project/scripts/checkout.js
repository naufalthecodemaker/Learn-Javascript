import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts} from "../data/products.js";
import {loadCart} from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';


Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1'); // to go to next step after finishing running the asysc code
    });
  }),
  new Promise((resolve) => { 
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1'); // to go to next step after finishing running the asysc code
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => { 
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/* tanpa promises ==> nested callbacks
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/