let height = prompt("height(m)");
let weight = prompt("weight(kg)");

if (weight / (height * height) >= 25) {
  alert("OVERWEIGHT");
}
if (weight / (height * height) < 25 && weight / (height * height) > 18) {
  alert("NORMAL");
}
if (weight / (height * height) <= 18) {
  alert("UNDERWEIGHT");
}
