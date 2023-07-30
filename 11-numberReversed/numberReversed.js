function numberReversed(input) {
  sum = 0;
  debugger;
  while (input != 0) {
    sum *= 10;
    sum = sum + (input % 10);

    input = Math.trunc(input / 10);
  }

  return sum;
}

let result = numberReversed(123456789);

alert(result);
