function isOpposite(s1, s2) {
  
    if (s1 === "") {return false};

  let opposite = "";

  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toUpperCase() === s1[i]) {
      opposite += s1[i].toLowerCase();
    } else {
      opposite += s1[i].toUpperCase();
    }
  }
  return opposite === s2 ? true : false;
}

isOpposite();
