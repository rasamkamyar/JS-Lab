function overall() {
    debugger;
  if (Math.floor(Math.random() * 100) > 90) {
    document.body.innerHTML = "Well Done";
    document.body.style.backgroundColor = "green";
  }
  if (
    Math.floor(Math.random() * 100) < 90 &&
    Math.floor(Math.random() * 100) > 60
  ) {
    document.body.innerHTML = "Not Bad";
    document.body.style.backgroundColor = "yellow";
  }
  if (Math.floor(Math.random() * 100) < 10) {
    document.body.innerHTML = "FAILED";
    document.body.style.backgroundColor = "red";
  }
}


overall();