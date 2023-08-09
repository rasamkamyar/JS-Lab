const imgs = [];

imgs[1] = "1.jpg";
imgs[2] = "2.jpg";
imgs[3] = "3.jpg";
imgs[4] = "4.jpg";
imgs[5] = "5.jpg";
imgs[6] = "6.jpg";
imgs[7] = "7.jpg";

window.onload = function randomBackground() {
  let random = Math.floor(Math.random() * imgs.length);
  document.body.style.backgroundImage = `url(${imgs[random]})`;
}


// window.onload??
// adam estefade az return (khodam return dadam anjam nemishod)
//sakhtare >>> `url(${imgs[random]})`


function setup(){

  var container = document.getElementById("container");

  for (var i = 0; i < 10; i++) {
      var box = document.createElement("div");
      container.appendChild(box);
      var colors = random_bg_color();
      box.style.backgroundColor = colors;

  }
}

function random_bg_color(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

setup()