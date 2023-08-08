// let prices = ["mug", "bag", "keyboard", "watch"];

// function yourPrice() {
//   let result = prices[Math.floor(Math.random() * prices.length)];

//   console.log("your price is: " + result);
// }

// yourPrice();

// let brands = ["benz", "bmw", "masserati", "dodge"];
// debugger;
// function brandsName() {
//   for (let i = 0; i < brands.length; i++) {
//     const element = brands[i];
//     let res = "your company: " + element;
//     console.log(res);
//   }
// }

// brandsName();

let sheeps = [true, true, false, false, true, true];

function howMany() {
  let sum = 0;
  for (let i = 0; i < sheeps.length; i++) {
    if (sheeps[i]) {
      sum++;
    }
  }
  return sum;
}

howMany();
