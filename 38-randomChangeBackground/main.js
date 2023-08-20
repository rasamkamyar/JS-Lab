const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

const images = ["azadi", "kiasar", "maranjab", "eram", "dolatabad"];
const titles = ["برج آزادی", "کیاسر", "مرنجاب", "باغ ارم", "دولت آباد"];
const subtitles = ["تهران", "مازندران", "اصفهان", "شیراز", "یزد"];

function changeImage(index) {
  document.body.style.backgroundImage = `url(./images/${images[index]}.jpg)`;
  title.textContent = titles[index];
  subtitle.textContent = subtitles[index];
}

function prevSlide() {
  ++index;
  if (index > images.length - 1) index = 0;
  changeImage(index);
}

function nextSlide() {
  --index;
  if (index < 0) index = images.length - 1;
  changeImage(index);
}

changeImage(index);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// for random
//   let randomIndex = Math.floor(Math.random() * images.length);
// setInterval(changeImage, 1000);
