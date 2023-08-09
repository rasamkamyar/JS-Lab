document.body.style.backgroundColor = "black";

let boxes = document.querySelectorAll(".main__box");

function colorfulBoxes() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red},${green},${blue})`;

  this.style.backgroundColor = color;
}

for (let index = 0; index < boxes.length; index++) {
  boxes[index].onclick = colorfulBoxes;
}
