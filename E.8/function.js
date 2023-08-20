// //
// let sum=0;
// let number;

// let result = addition();

// document.write(result);

// function addition() {
//     sum += number;
//     return sum;
// }

// function input(number){
// do {
//     number = Number(prompt("enter a number"));
//     addition();
// } while (number !== 0);}

// input(number);

let number = +prompt("enter a number");
let sum = 0;

function justZeroOne(input) {
  if (input === 0) {
    return true;
  }
  else{
        sum += input
       while(input !== 0) 
      return sum
  }
}

console.log(justZeroOne(number));
