function sumMultiples(n, m) {
  if (n > m) {
    return "invalid";
  }

  sum = 0;
  for (i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
}

let result = sumMultiples(2, 9);
alert(result);
