function middleNumber(x, y, z) {
  if ((x > y && x < z) || (x < y && x > z)) {
    return x;
  } else if ((y > x && y < z) || (y < x && y > z)) {
    return y;
  } else {
    return z;
  }
}
