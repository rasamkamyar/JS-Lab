function tripleTrouble(w1, w2, w3) {
  if (
    w1.length != w2.length ||
    w1.length != w3.length ||
    w2.length != w3.length
  ) {
    return "invalid";
  }

  let count = w1.length;
  char = "";

  for (i = 0; i <= count - 1; i++) {
    char += w1[i] + w2[i] + w3[i];
  }
  return char;
}

let firstword = prompt("first");
let secondword = prompt("second");
let thirdword = prompt("third");

alert(tripleTrouble(firstword, secondword, thirdword));


