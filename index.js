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
    var str = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(str)
  }
  else if(cart.length === 2) {
    var str = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
    console.log(str)
  }
  else if(cart.length != 0) {
    var str = "In your cart, you have"
    var i
    for(i = 0; i < (cart.length - 1); i++) {
      str = `${str} ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    }
    str = `${str} and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
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
