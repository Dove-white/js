alert('hello world');
prompt('Soke');
prompt('Soke');

//Exercise(5) number one(1)
//Write a function that takes an array of numbers and returns the largest number in the array.

// This is the Pseudocode
//- Define an array of numbers
//- Initialize a variable to hold the largest number
//- Loop through the array and compare each number to the largest number
//- Finally return the result

// the code.
function largestArray(numArray) {
    let largestNumber = numArray[0];
    for (let i = 1; i < numArray.length; i++)
      if (numArray[i] > largestNumber)
        largestNumber = numArray[i];
    return largestNumber;
  }
  
  let evenNumbers = [2,4,6,8,10];
  console.log(largestArray(evenNumbers));// this will print 10(the largest).
// done.


//Exercise(5) number two(2)
//Write a function that takes a string as an argument and returns the string reversed.

// This is the Pseudocode
// -Define an array of strings
// -Loop through with arguments
// -Finally return the result with reversed method 

// the code
function stringArgument() {
  for (let stringsOfArray of arguments) 
  return stringsOfArray.reverse(); // this function is use to reverse the array to start from the end.
}
const array = ['do','go','come'];
console.log(stringArgument(array));
// done.
