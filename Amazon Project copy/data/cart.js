// export agar variablenya bisa dipake diluar file cart.js
export let cart = JSON.parse(localStorage.getItem('cart')); 
// step 2 about local storage ==> balikin ke tipe data awal, dengan JSON.parse

if(!cart){
  cart = [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
          }, {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1
          }
        ]; 
}

function saveToStorage(){ // step 1 about local storage ==> taro nama local storage (bebas)
  localStorage.setItem('cart', JSON.stringify(cart)); // harus di stringify karena local storage cuma bisa save strings
}

export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    } 
  });

  if(matchingItem){
    matchingItem.quantity++;
  } else{
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage();
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  
  saveToStorage();
}

export function calculateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    } 
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}