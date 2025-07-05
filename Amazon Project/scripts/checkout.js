import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCart} from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage(){ // async makes a function return a promise
  try{ // bisa digunakan selain di async await
    // throw 'error1'; 
    
    await loadProductsFetch(); // wait this line to finish and go to the next line
    // only use await, whe n inside an async function and only be used with promises

    const value = await new Promise((resolve, reject) => {
      // throw 'error2'; // create an error right now
      loadProducts(() => {
        // reject('error3'); // create an error in the future
        resolve('value3'); // to go to next step after finishing running the asysc code
      });
    });

  } catch(error){ // error handling in async await
    console.log('Unexpected error. Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadProducts(() => {
      resolve(); // to go to next step after finishing running the asysc code
    });
  }),

]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/

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