let userReq = new XMLHttpRequest();
userReq.open("GET", "https://jsonplaceholder.ir/users");

function getUsers() {
let userData =  JSON.parse(userReq.responseText);
renderUser(userData)
}

function renderUser(items) {
let temp = items.map((item) => {
    const{id,name,username,email,password,avatar,address,phone,website,company} = item
    return `<div>    
    ${id},
    ${name},
    ${username},
    ${email},
    ${password},
    ${avatar},
    ${address},
    ${phone},
    ${website},
    ${company},
  </div>
        
        `;
  });

  document.body.innerHTML = temp.join("")
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