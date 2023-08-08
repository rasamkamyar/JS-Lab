function randomBack() {
  debugger;
  let random = Math.floor(Math.random() * 7 + 1);

  document.body.style.backgroundImage = `url(${random}.jpg)`;
}

randomBack();
