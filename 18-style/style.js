function changeBackground(color){

    document.body.style.backgroundColor = color;

}

function randomBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function passwordGenerator() {
  
  let pass = "";
    for (i = 0; i < 6; i++) {
    pass += Math.floor(Math.random() * 10);
  }
  return pass;
}

