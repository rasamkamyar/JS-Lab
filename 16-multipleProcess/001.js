function multiplePro(input) {
  debugger;

  result = 0;
  numberString = "";
  for (i = input; i <= 100; i += input) {
    numberString = numberString + "  " + String(i);

    count = i;
    sum = 0;

    while (count >= 10) {
      sum = count % 10;

      count = parseInt(count / 10);
    }

    sum += count;
    console.log(sum);
    result = result + sum;
  }

  console.log("numberString is " + numberString);
  return result;
}
