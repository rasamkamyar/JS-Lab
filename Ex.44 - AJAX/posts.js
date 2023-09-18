let root = document.getElementById("root");

function postAjax(userId) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.ir/posts${userId ? `?userId=${userId}` : ""}`
  );
  request.addEventListener("load", () => {
    setTimeout(() => {
      getData(request);
    }, 300);
  });
  request.send();
}

function getData(request) {
  let data = JSON.parse(request.responseText);
  render(data);
}

function render(list) {
  let template = list.map((post) => {
    let user = USERS.find((user) => user.id === post.userId);
    return `<div class = "posts">
        <span>نویسنده: ${user?.name}</span>
        <br>
        <span>پست شماره: ${post.id}</span>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    </div>`;
  });

  root.innerHTML = template.join("");
}
postAjax();
