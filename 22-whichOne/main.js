function whichOne(element) {
  let thing = element.src;
  let bigImg = document.getElementById("bigImage");

  bigImg.src = thing;

  let selectOne = document.querySelector(".selected");

  selectOne.classList.remove("selected");
  element.classList.add("selected");
}
