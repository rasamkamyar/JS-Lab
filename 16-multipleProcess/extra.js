


function exercise(num) {

    
  let count = parseInt(num / 10);

  return count;
}

function reversedNmber(num) {
  let count = num % 10;

  return count;
}

let result = +prompt("enternumber");

alert(exercise(result));

function index(num) {
  debugger;

  sum = 0;
  while (num >= 10) {
    console.log(num % 10);

    sum = sum + (num % 10);

    num = parseInt(num / 10);
  }

  console.log(num);

  sum += num;
  console.log(sum);
}


