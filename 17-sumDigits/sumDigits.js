function prucedure(n) {
  
  sum = 0;

  for (let i = 1; i * n <= 100; i++) {
    sum += sumDigits(i * n);
  }

  return sum;
}

function sumDigits(n) {
  input = String(n);
  count = input.length;
  sum = 0;

  for (let i = 0; i < count; i++) {
    sum += +input[i];
  }

  return sum;
}
