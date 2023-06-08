/*
Exercise 14: Palindrome Checker
Write a function called isPalindrome that takes a string as an argument 
and returns true if the string is a palindrome (reads the same forwards 
and backwards), and false otherwise. For example, if the input is 
"racecar", the function should return true.
*/

// -Define a string
// -Loop through with arguments to hold the string
// -Change string to lower case with it's method
// -Remove space in value with replaceAll method
// -Split the string with a split method
// -Reverse the already split sting with reverse method (palindrome in backward)
// -Initialize a variable to hold the reverse without splitting it
// -Finally compare the variable with the string to return a boolean

let InputValue = "Taco cat";

function isPalindrome(str) {
  for (let value of arguments) {
    let toLowerCaseValue = value.toLowerCase();
    let removeSpaceInValue = toLowerCaseValue.replaceAll(' ','');
    let splitValue = toLowerCaseValue.split("");
    let revereSplitValue = splitValue.reverse();
    let removeSplit = revereSplitValue.join("");
    let removeSpaceInReverseValue = removeSplit.replaceAll(' ','');

    return removeSpaceInReverseValue === removeSpaceInValue;
  }
}

console.log(isPalindrome(InputValue));
