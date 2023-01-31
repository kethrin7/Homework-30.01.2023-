// 1. Create a program that takes an array of numbers and returns the sum of all the numbers in the array. Use a for loop to iterate over the array and add each number to a total variable.

const numbers = [20, 30, 65, 87, 67, 108];

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sum(numbers));



// 2.Create a program that takes a string and returns the number of vowels in the string. Use a for loop to iterate over the string, and use an if statement to check if each character is a vowel.

  const vowels = "aeiou";

function allVowels(str) {
  let all = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !==-1) {
      all++;
    }
  }
  return all;
}

let testString = "This is a test string";
console.log(allVowels(testString)); 
