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


