let age = +prompt("enter your age");

if (age > 18) {

    document.body.style.background = "green";
    document.body.innerText = "welcome";
} else{
    document.body.style.background = "red"
    document.body.innerText = "forbidden";
}