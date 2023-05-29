//Exercise(9) number one(1)
//Write a function that takes an array of numbers as input and returns a new array with only the numbers that are greater than 10.
// -Define an array of number
// -Finally return a filter method to show more than 10

const numbers = [2,5,8,10,12,15,20];

function greaterThan10(myArray) {
  return myArray.filter(num => num > 10);
}

console.log(greaterThan10(numbers));