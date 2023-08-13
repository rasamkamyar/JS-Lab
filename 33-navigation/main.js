let header = document.querySelector("header");
let oldScroll = window.scrollY;

function ChangeHeader() {
  if (window.scrollY > 200) {
    if (window.scrollY > oldScroll) {
      header.classList.add("change");
      header.style = "height: 0;";
    } else {
      header.classList.remove("change");
      header.style = "height: 0;";
      header.style = "height: 200px;transition: 1.5s";
    }
  }
  oldScroll = window.scrollY;
}

window.addEventListener("scroll", ChangeHeader);
