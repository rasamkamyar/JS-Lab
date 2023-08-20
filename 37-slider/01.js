// functions
function changeSlide(event) {
  if (event.deltaY > 0) {
    if (event.target.getAttribute("id") !== "last")
      event.target.classList.add("slideup");
  } else {
    if (event.target.getAttribute("id") !== "first")
      event.target.previousElementSibling.classList.remove("slideup");
  }
}

// events
window.addEventListener("wheel", changeSlide);
