var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  item = { [itemName]: itemPrice}
  cart.push(item)
  var str = `${itemName} has been added to your cart.`
  console.log(str)
  return cart
}

function viewCart() {
  var str = "In your cart, you have "
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length === 2) {
      str = `${str} ${Object.keys(cart[0], [0])} at $${Object.keys(cart[0], [1])} and ${Object.keys(cart[1], [0])} at $${Object.keys(cart[1], [1])}.`
      console.log(str)
  }
  else {
    for(var i = 0; i < (cart.length - 1); i++){
      str = `${str} ${Object.keys(cart[i], [0])} at $${Object.keys(cart[i], [1])}, and `
    }
    str = `${str} ${Object.keys(cart[i], [0])}.`
    console.log(str)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
