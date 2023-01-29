// 1. Create a program that takes an array of numbers and returns the sum of all the numbers in the array. Use a for loop to iterate over the array and add each number to a total variable.

const numbers = [20, 30, 65, 87, 67, 108];

function sum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }

  console.log(num);
}

sum(numbers);


// 3.Create a program that takes an array of strings and returns an array of the same strings in reverse order. Use a for loop to iterate over the array in reverse order and add each string to a new array.

function reverseArray(arr) {
  let originalArray = ["kiwi", "cherry", "orange"];
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reverseArr;
}
console.log(reverseArray(originalArray)); 


// arrow function
const reverseArray = (arr) => arr.reverse();
let originalArray = ["kiwi", "cherry", "orange"];
console.log(reverseArray(originalArray));