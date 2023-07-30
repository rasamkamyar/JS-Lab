function numberReversed(input) {
  input = String(input);

  let count = input.length;
  let output = "";

  for (i = count - 1; i >= 0; i--) {

    output = output + input[i];

  }

  return output;
};


let result = +(numberReversed(123456789));
alert (result);
