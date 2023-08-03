function stringy(size) {
  debugger;
  sum = "";

  for (i = 0; i < size; i++) {
    if (i % 2 == 0) {
      sum += "1";
    } else {
      sum += "0";
    }
  }

  return sum;
}

function mathOperator(operator, number1, number2) {
  debugger;
  if (operator == "+") {
    return number1 + number2;
  }
  if (operator == "-") {
    return number1 - number2;
  }
  if (operator == "*") {
    return number1 * number2;
  }
  if (operator == "/") {
    return number1 / number2;
  }
}

function sumMulti(n,m) {
    debugger;
  if (n > m) {
    return "INVALID";
  }

  let sum = 0;
  
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
