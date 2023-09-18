let root = document.getElementById("root");
let userReq = new XMLHttpRequest();
userReq.open("GET", "https://jsonplaceholder.ir/users");

function getUsers() {
  let userData = JSON.parse(userReq.responseText);
  renderUser(userData);
}

function renderUser(items) {
  let temp = items.map((item) => {
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
    } = item;
    return `<div class = "card">    
    <span>${id} - ,
    <h1>${name}</h1>,
    <h2>${username}</h2>
    </span>,
    <span>${email}</span>,
    <span>${password}</span>,
    ${avatar},
    ${address},
    <div class = footer>
    <span>${phone}</span>,
    <span>${website}</span>,
    <span>${company}</span>,
    </div>
  </div>`;
  });

  root.innerHTML = temp.join(" ");
}

userReq.addEventListener("load", getUsers);
userReq.send();

// {
//     "id": 1,
//     "name": "محمدرضا راد",
//     "username": "Morad",
//     "email": "morad@april.biz",
//     "password": "Ab485652",
//     "avatar": "https://avatars.dicebear.com/api/male/mamad.svg",
//     "address": {
//       "country": "ایران",
//       "city": "تبریز",
//       "street": "خیابان امام",
//       "alley": "کوچه بهشتی",
//       "number": 168,
//       "geo": {
//         "lat": "38.066667",
//         "lng": "46.3"
//       }
//     },
//     "phone": "+989143548471",
//     "website": "http://hildegard.org",
//     "company": "آتیه سازان شرق"
//   }
