let prices = ["mug", "bag", "keyboard", "watch"];

function yourPrice() {
  let result = prices [Math.floor(Math.random() * prices.length)];

  console.log("your price is: " + result);
}

yourPrice();
