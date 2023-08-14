let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

h1.addEventListener("mouseenter", function () {
  h1.classList.toggle("red");
});
h1.addEventListener("mouseleave", function () {
  h1.classList.toggle("blue");
});
// h1.addEventListener("mouseenter", function () {
//   h1.classList.toggle("yellow");
// });

// beram rush ghermez
// biam birun abi
// baz beram rush zard

btn.addEventListener("click", function () {
  document.body.classList.toggle("light");
});
