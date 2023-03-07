//Exercise(8) number two(2)
//Write a function that takes an array of numbers and returns the sum of all the numbers that are divisible by 3 or 5.
// -Define an array of numbers
// -Initialize a variable to hold filter method of divisible by 3 or 5
// -Finally return variable with reduce method to add

const numbers = [10,15,17,31];
function totalSum(num) {
  const divBy5Or2 = num.filter(number => (number % 3 === 0) || (number % 5 === 0));
  return divBy5Or2.reduce((sum,currentValue) => sum+currentValue);
}
console.log(totalSum(numbers));