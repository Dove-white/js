//Exercise(5) number two(2)
//Write a function that takes a string as an argument and returns the string reversed.
// -Define an array of strings
// -Loop through with arguments
// -Finally return the result with reversed method 

const array = ['do','go','come'];
function stringArgument() {
    for (let stringsOfArray of arguments) 
    return stringsOfArray.reverse(); 
  }
  console.log(stringArgument(array));