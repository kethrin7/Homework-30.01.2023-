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


// 4. Create a variable called "temp" and assign it a value of your choice.
// Use an if-else if-else statement to check the "temp" variable.
// If the temperature is less than 32, use the console.log function to print "It's freezing outside!"
// If the temperature is between 32 and 50, use the console.log function to print "It's chilly outside."
// If the temperature is between 51 and 70, use the console.log function to print "It's comfortable outside."
// If the temperature is greater than 70, use the console.log function to print "It's hot outside!"
// let temp = 68;

const temp=70;
if(temp<32){
  console.log("it's freezing outside!")
}
else if (temp>=32 && temp<=50){
  console.log("It's chilly outside")
}
else if ( temp>=51 && temp<=70){
  console.log("It's comfortable outside")
}
else (
  console.log("It's hot outside")
);