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
  if(cart.length === 1) {
    var str = `In your cart, you have ${Object.keys(cart[0], [0])} at $${Object.keys(cart[0], [1])}.`
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
