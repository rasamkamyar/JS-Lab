let root = document.getElementById("root");
let userReq = new XMLHttpRequest();
userReq.open("GET", "https://jsonplaceholder.ir/users");

function getUsers() {
  let userData = JSON.parse(userReq.responseText);
  renderUser(userData);
}

function showMore(){

}

function renderUser(data) {
  let temp = data.map((user) => {
    const {
      id,
      name,
      username,
      email,
      password,
      avatar,
      address,
      phone,
      website,
      company,
    } = user;
    const { country, city, street, alley, number, geo } = address;
    return `<div class = "card">    
    <span>${id} - ${name}</span>
    <h1>${username}</h1>
    <span>User Name: ${email}</span>
    <span>Password: ${password}</span>
    <img src="${avatar}">
    <button id = "show-more">SHOW MORE</button>
    <div class = "footer">
    <span>آدرس : ${country} - ${city} - ${street} - ${alley} - پلاک : ${number}</span>
    <span> موقعیت جغرافیایی : ${geo.lat}${geo.lng} </span>
    <span>نام شرکت : ${company}</span>
    <span>شماره تماس : ${phone}</span>
    <span>وبسایت : ${website}</span>
    </div>
    </div>`;
  });

  root.innerHTML = temp.join("");
}

userReq.addEventListener("load", getUsers);
userReq.send();
