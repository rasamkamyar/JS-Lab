let select = document.querySelector("select");
let USERS = [];

function userAjax() {
  let userRequest = new XMLHttpRequest();
  userRequest.open("GET", "https://jsonplaceholder.ir/users");
  userRequest.addEventListener("load", () => {
    getUserData(userRequest);
  });
  userRequest.send();
}

function getUserData(userRequest) {
  let data = JSON.parse(userRequest.responseText);
  renderUser(data);
  USERS = data;
}

function renderUser(list) {
  let template = list.map((user) => {
    return `
    <option value="${user.id}">${user.name}</option>
    `;
  });

  select.innerHTML = template.join("");
}

function changeUser(event) {
  const userId = event.target.value;
  postAjax(userId);
}

userAjax();
select.addEventListener("change", changeUser);
