const covers = document.querySelectorAll(".cover");
const seasons = document.querySelectorAll(".season");

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



// function moveContent(event) {
//   let x = event.clientX / 20;
//   let y = event.clientY / 10;

//   seasons.style.transform = `translate(${x}px,${-y}px)`;
//   season.target.style.transform = "transition: 1.5s";
// }

// window.addEventListener("mousemove", moveContent);



//  amalkarde na mafhume season va mousemove
//  amalkarde true dar for coverActive