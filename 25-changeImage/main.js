let bigImage = document.getElementById("big__image");
let thumbs = document.querySelectorAll(".images img");

function changeImage() {
  let thmubSrc = this.getAttribute("src");
  bigImage.setAttribute("src", thmubSrc);

}

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = changeImage;
}
