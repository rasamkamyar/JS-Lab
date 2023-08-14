document.body.style.backgroundColor = "black";

const divs = document.querySelectorAll("div");

function colorBox(event) {
  event.target.style.backgroundColor = randomColor();
  event.target.classList.add("disable");
}
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red} , ${green} , ${blue})`;
}

for (const div of divs) {
  div.addEventListener("click", colorBox);
}
