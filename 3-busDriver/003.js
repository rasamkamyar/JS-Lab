let cap = +prompt("cap");
let inBus = +prompt("inBus");
let waiting = +prompt("waiting");

if (cap >= inBus + waiting) {
  alert("WELCOME");
} else {
  alert("NO CAPACITY");
}
