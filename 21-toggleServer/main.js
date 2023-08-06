let flag = true;

function toggleServer() {
  let p = document.querySelector("p");
  let btn = document.querySelector("button");

  if (flag === true) {
    p.textContent = "server is running....";
    p.style.color = "green";
    btn.textContent = "stop server";
    flag = false
} else {
    p.textContent = "server is stopped!";
    p.style.color = "red";
    btn.textContent = "start server";
    flag = true;
  }
}
