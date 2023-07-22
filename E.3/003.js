let cap = prompt("capacity");
let on = prompt("inBus");
let wait = prompt("wait");
let result = cap - on - wait;

if (result > 0) {
    console.log("welcome");
}
if (result <= 0) {
    console.log("no capacity");
};
debugger;



// let result = cap - (on + wait);