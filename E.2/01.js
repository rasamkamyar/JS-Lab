let weight = prompt("weight(kg)");
let height = prompt("height(m)");


if (weight / (height * height) >= 25) {
    alert("overweight");
};
if ((weight / (height * height) < 25) && (weight / (height * height) > 18)) {
    alert("normal");
};
if (weight / (height * height) < 18){
    alert("underweight");
};