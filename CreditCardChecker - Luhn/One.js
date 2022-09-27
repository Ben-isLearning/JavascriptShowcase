//Luhn Algorithm
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];

function validateCard(array) {
  let runningTotal = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    console.log(` value ${array[i]} index - ${[i]}`);
    if ([i] % 2 === 0) {
      console.log("Even Index - Do Math!");
      let sum = array[i] * 2;
      if (sum > 9) {
        sum -= 9;
        runningTotal += sum;
        console.log(`${sum} has been added from the math part`);
      } else {
        runningTotal += sum;
        console.log(`${sum} has been added from the easy part`);
      }
    } else {
      console.log("Odd Index - Add value");
      runningTotal += array[i];
      console.log(`${array[i]} has been added`);
    }
  }

  if (runningTotal % 10 === 0) {
    return true;
  } else return false;
}

console.log(validateCard(valid2));
console.log("***");
