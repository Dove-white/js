//Exercise(6) number one(1)
//Write a function that takes an array of strings and returns a new array with all the strings capitalized.
// -Define an array of strings (exercise(5) number one(1))
// -Loop through with arguments
//- Initialize a variable to hold an Uppercase method
// -Finally return the result with a map method to hold the variable

const anotherArray = ['do','go','come','run'];
function stringCapitalized() {
    for (let valueOfStrings of arguments) {
      const capitalized = name => name.toUpperCase();
    return valueOfStrings.map(capitalized);
  }
}
console.log(stringCapitalized(anotherArray));