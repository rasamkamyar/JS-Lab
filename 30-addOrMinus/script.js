let add = document.querySelector(".btn-primary");
let minus = document.querySelector(".btn-danger");
let oddNumber = document.querySelector(".btn-warning");
let h2 = document.querySelector("h2");

function addBtn() {
  let counter = +h2.textContent;
  h2.textContent = ++counter;
}
function minusBtn() {
  let counter = +h2.textContent;
  h2.textContent = --counter;
}
function oddNumberBtn() {
  let counter = +h2.textContent;
  if (counter % 2 != 0) {
    h2.textContent = counter + 2;
  }
}

add.addEventListener("click", addBtn);
minus.addEventListener("click", minusBtn);
oddNumber.addEventListener("click", oddNumberBtn);
