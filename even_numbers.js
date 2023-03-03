//Exercise(7) number one(1)
//Write a function that takes an array of numbers and returns a new array with only the even numbers.
// -Define an array of numbers
// -Initialized a variable to hold evenNumbers method
// -Loop through with argument
// -Finally return variable with filter method

const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

function evenNumbers(num){
  return num.filter(number => number % 2 === 0);
}

console.log(evenNumbers(numbers));