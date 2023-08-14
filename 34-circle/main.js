const circle = document.getElementById("circle");

function trackCircle(event) {
  circle.style.backgroundColor = "red";
  circle.style.transition = "1.5s";
}

function trackCircleBack() {
  circle.style.backgroundColor = "blue";
  circle.style.transition = "1.5s";
}

circle.addEventListener("mouseleave", trackCircle);
circle.addEventListener("mouseenter", trackCircleBack);
