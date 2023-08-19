let width = +prompt("width");
let length = +prompt("length");

if (width === length) {
  alert("this is square area : " + width * width || length * length);
} else {
  alert("this is renctangle area : " + width * length);
}
