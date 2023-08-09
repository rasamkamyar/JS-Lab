const numbers = [5, -1, 18, -7.6, 120, 3, 12.5];

let minNumber = numbers[0];

function findMinNumber() {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if (element < minNumber) {
      minNumber = element;
    }
  }
  return minNumber;
}
findMinNumber();
