document.body.style.backgroundColor = `rgb(${35} , ${4} , ${66})`;
let image = document.querySelector(".style");
let title = document.querySelector(".title");
let price = document.querySelector(".price");
let rate = document.querySelector(".rate");
let hasBadge = document.querySelector(".hasBadge");

function card() {
  const product = {
    title: "دوربین دیجیتال کانن مدل EOS 5D Mark IV",
    price: 4800000,
    imageUrl:
      "https://dkstatics-public.digikala.com/digikala-products/638044.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    rate: 4,
    hasBadge: false,
  };

  function changePrice() {
    let x = product["price"];
    let nemNumber = x / 10;
    let sepratedNumber = nemNumber.toLocaleString();
    return sepratedNumber;
  }

  image.setAttribute("src", product.imageUrl);
  title.textContent = product.title;
  price.textContent = changePrice() + " تومان";
  rate.textContent = "your rate " + product.rate;
  hasBadge.textContent = product.hasBadge;
}

window.addEventListener("load", card);
