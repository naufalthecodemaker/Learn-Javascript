// class ==> object generator
class Cart {
  // add properties
  cartItems; // gaperlu pake undefined
  #localStorageKey; // agar menjadi private property (hanya bisa digunakan di class ini)
  validDeliveryOption = './deliveryOptions.js';

  // add methods
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  // shorcut dari loadFromStorage: function(){}
  #loadFromStorage(){ // private method
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); 
  
    if(!this.cartItems){
      this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2, 
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1, 
        deliveryOptionId: '2'
      }]; 
    }
  }

  saveToStorage(){ 
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId){
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      } 
    });

    if(matchingItem){
      matchingItem.quantity++;
    } else{
      this.cartItems.push({
        productId: productId,
        quantity: 1, 
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      } 
    });

    if(!matchingItem){
      return;
    }

    if(!validDeliveryOption(deliveryOptionId)){
      return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }

  updateQuantity(productId, newQuantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.quantity = newQuantity;

    this.saveToStorage();
  }
}

const cart = new Cart('cart-oop'); // gunakan new utk generate object using class
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);

// instance of the class => object yg dibuat di class
// utk ngecek:
console.log(businessCart instanceof Cart);


