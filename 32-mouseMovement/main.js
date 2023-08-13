let covers = document.querySelectorAll(".cover");

function coverActive(event) {
  event.target.style = "opacity: 0 ; transition: 1.5s";
}

function coverInActive(event) {
  event.target.style = "opacity: 1 ; transition: 1.5s";
}

for (const cover of covers) {
  cover.addEventListener("mouseenter", coverActive);
  cover.addEventListener("mouseleave", coverInActive);
}
