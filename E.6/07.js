let weight = Number(prompt("enter your weight"));
let height = Number(prompt("enter your height"));

let index = BMICalc(weight, height);
let status = showStatus (index);

document.write("your status is: " + status);