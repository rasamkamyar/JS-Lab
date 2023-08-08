
let bigImage = document.getElementById("bigImage"); 
let thumbs = document.querySelectorAll(".images img");


function changeImage(){

  let thumbSrc = this.getAttribute("src")
  bigImage.setAttribute("src", thumbSrc);
}

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = changeImage;
  
}


