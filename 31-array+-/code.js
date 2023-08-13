function addLength(str) {
  debugger;
  let word = str.split(' ');
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    arr.push(word[i] + " " + word[i].length);
  }

  return arr;
};
addLength();