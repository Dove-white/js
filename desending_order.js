//Exercise(10) number one(1)
//Write a function that takes an array of numbers as input and returns a new array with the numbers sorted in descending order.
// -Define an array of numbers
// -Finally return array with sort method to arrange in descending order

const numbers = [1,3,7,5,6,9,10];

const descendingOrder = num => num.sort((a,b) => b - a);

console.log(descendingOrder(numbers));