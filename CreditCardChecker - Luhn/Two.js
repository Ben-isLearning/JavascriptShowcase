//Luhn Algorithm

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];

function validateCard(array) {
  let arrayCopy = array;

  let lastDigit = arrayCopy.pop();
  let newArray = array.reverse();
  let runningTotal = 0;
  let finalValue = 0;

  for (let i = 0; i < newArray.length; i++) {
    //console.log(`index = ${[i]} and value = ${newArray[i]}`);
    if ([i] % 2 === 0) {
      //console.log("Even Index - Do Math!");
      let sum = array[i] * 2;
      if (sum > 9) {
        sum -= 9;
        runningTotal += sum;
        //console.log(`${sum} has been added from the math part`);
      } else {
        runningTotal += sum;
        //console.log(`${sum} has been added from the easy part`);
      }
    } else {
      //console.log("Odd Index - Add value");
      runningTotal += array[i];
      //console.log(`${array[i]} has been added`);
    }
  }
  finalValue = runningTotal + lastDigit;
  if (finalValue % 10 === 0) {
    return true;
  } else return false;
}

console.log(validateCard(valid1));
console.log(validateCard(valid2));
console.log(validateCard(invalid1));
console.log(validateCard(invalid2));
console.log(validateCard(mystery1));
console.log(validateCard(mystery2));
