let width = prompt("width");
let length = prompt("length");
let squareArea = width*width || length*length;
let recCircum = width*2 + length*2;


if (width == length && squareArea) {
    alert("square");
};
if (width < length && recCircum) {
    alert("rectangle");
};
debugger;