//Exercise(7) number one(1)
//Write a function that takes an array of numbers and returns a new array with only the even numbers.
// -Define an array of numbers
// -Initialized a variable to hold evenNumbers method
// -Loop through with argument
// -Finally return variable with filter method

let numbers = [1, 2, 3, 4, 5, 6]

function evenNumbers(){
  const evenMethod = n => n % 2 === 0 ;
  for (let number of arguments)
  return number.filter(evenMethod);  
}

console.log(evenNumbers(numbers));