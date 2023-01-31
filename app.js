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



//5. Create a variable called "day" and assign it a string value representing a day of the week (e.g. "Monday").
// Use a switch statement to check the "day" variable and use the console.log function to print the following:
// If the day is "Monday" or "Tuesday" or "Wednesday" or "Thursday" or "Friday", print "It's a weekday."
// If the day is "Saturday" or "Sunday", print "It's a weekend!"
// If the day is any other value, print "Invalid day."

const day = `Sunday`;

switch (day) {
  case `Monday`: console.log("It's a weekday.")
    break;
  case `Tuesday`:console.log("It's a weekday.");
    break;
  case `Wednesday`:console.log("It's a weekday.");
    break;
  case `Thursday`:console.log("It's a weekday.");
    break;
  case `Friday`:console.log("It's a weekday.");
    break;
  case `Saturday`:console.log("It's a weekend!");
    break;
  case `Sunday`:console.log("It's a weekend!");
    break;

  default: console.log("Invalid day.")
    break;
};

// better way >>>>>>>>>>>> Shorthand <<<<<<<<<<<<<<<<<

let goodDay = "Friday";

switch (goodDay) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend!");
    break;
  default:
    console.log("Invalid day.");
}