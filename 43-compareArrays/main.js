const a1 = [1, 2, 3, 4, 5];
const a2 = [3, 4, 5, 6, 7];

function sameValue() {
  return a1.filter((item) => a2.includes(item));
}
console.log(sameValue());

function differentValue() {
  let different = [
    ...a1.filter((item) => !a2.includes(item)),
    ...a2.filter((item) => !a1.includes(item)),
  ];
  return different;
}

console.log(differentValue());

function allValue() {
  let all = [
    ...a1.filter((item) => !a2.includes(item)),
    ...a2.filter((item) => a1.includes(item)),
    ...a2.filter((item) => !a1.includes(item)),
  ];
  return all;
}
console.log(allValue());
