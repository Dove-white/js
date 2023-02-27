alert('hello world');
prompt('Soke');
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