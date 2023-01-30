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

// task 1

const cars = [`Ferrari`, `Merce`, `Lambo`];
for (const car of cars) {
  console.log(car);
}

// task 2

const variant = (x) => {
  if (x > 25) {
    console.log(`${x} მეტია 25 - ზე`);
  } else if (x == 25) {
    console.log(`${x} ტოლია 25 - ის`);
  } else {
    console.log(`${x} ნაკლებია 25 - ზე`);
  }
};

variant(26);
