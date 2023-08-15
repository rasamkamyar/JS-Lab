let btn = document.querySelector("button");
let html = document.querySelector(".html");
let css = document.querySelector(".css");

function changeImage() {
  let result = html.getAttribute("src");
  let res = css.getAttribute("src");

  css.setAttribute("src", result);
  html.setAttribute("src", res);
}

btn.addEventListener("click", changeImage);
