function multipleProcess(input) {
  debugger;
  result = 0;

  numberString = "";
  for (i = input; i <= 100; i += input) {
    numberString = numberString+"      "+String(i);

    // i = 25
    let count = i;

    sum = 0;
    while (count >= 10) {
      sum += count % 10;
      count = parseInt(count / 10);
    }

    sum += count;

    console.log(sum);

    result += sum;
  }

  console.log("our numberString is: " + numberString);
  return result;
}
