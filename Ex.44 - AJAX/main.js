let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.ir/posts");
// let root = document.querySelector(".root")



function getData() {
  let data = JSON.parse(request.responseText);
  render(data);
}

function render(list) {
 let template = list.map(post => {
    return `<div class = "root">
        <span>user ID : ${post.userId}</span>
        <span> post ID : ${post.id}</span>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    </div>`
  })

  document.body.innerHTML = template.join("")
}

request.addEventListener("load", getData);
request.send();
