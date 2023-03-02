

//Exercise(5) number one(1)
//Write a function that takes an array of numbers and returns the largest number in the array.
//- Define an array of numbers
//- Initialize a variable to hold the largest number
//- Loop through the array and compare each number to the largest number
//- Finally return the result

function largestArray(numArray) {
    let largestNumber = numArray[0];
    for (let i = 1; i < numArray.length; i++)
      if (numArray[i] > largestNumber)
        largestNumber = numArray[i];
    return largestNumber;
  }
  
  let evenNumbers = [2,4,6,8,10];
  console.log(largestArray(evenNumbers));


//Exercise(5) number two(2)
//Write a function that takes a string as an argument and returns the string reversed.
// -Define an array of strings
// -Loop through with arguments
// -Finally return the result with reversed method 

function stringArgument() {
  for (let stringsOfArray of arguments) 
  return stringsOfArray.reverse(); 
}
const array = ['do','go','come'];
console.log(stringArgument(array));

//Exercise(6) number one(1)
//Write a function that takes an array of strings and returns a new array with all the strings capitalized.
// -Define an array of strings (exercise(5) number one(1))
// -Loop through with arguments
//- Initialize a variable to hold an Uppercase method
// -Finally return the result with a map method to hold the variable

function stringCapitalized() {
    for (let valueOfStrings of arguments) {
      const capitalized = name => name.toUpperCase();
    return valueOfStrings.map(capitalized);
  }
}
console.log(stringCapitalized(array));

//Exercise(6) number two(2)
//Write a function that takes a string as an argument and returns the number of vowels in the string.
// -Define string
// -Initialized a count variable to zero(0)
// -Loop through the string
// -Initialized a variable to hold the string with lowerCase method 
// -An IF statements to compare vowels
// -Assign count +1
// -Finally return count

const sentence = 'my name is somebody';
function numberOfVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++){
    let method = word[i].toLowerCase();
    if (method === 'a'|| method === 'e'|| method === 'i'|| method === 'o' || method === 'u')
     count += 1;
  }
  return count;
}
console.log(numberOfVowels(sentence));
