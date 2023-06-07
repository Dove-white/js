/*
Exercise 14: Palindrome Checker
Write a function called isPalindrome that takes a string as an argument 
and returns true if the string is a palindrome (reads the same forwards 
and backwards), and false otherwise. For example, if the input is 
"racecar", the function should return true.
*/

// -Define a string
// -Loop through with arguments to hold the string
// -Split the string with a split method
// -Reverse the already split sting with reverse method (palindrome in backward)
// -Initialize a variable to hold the reverse without splitting it
// -Finally compare the variable with the string to return a boolean

let word = "racecar";

function isPalindrome() {
  for (let value of arguments) {
    let splitValue = value.split("");
    let revereSplitValue = splitValue.reverse();
    let removeSplit = revereSplitValue.join("");

    return removeSplit === value;
  }
}

console.log(isPalindrome(word));
