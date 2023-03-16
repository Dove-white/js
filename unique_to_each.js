//Exercise(10) number two(2)
//Write a function that takes two arrays as input and returns a new array with only the elements that are unique to each array.
// -Define two arrays of numbers
// -Initialize a variable to hold am empty array
// -Loop through first array
// -Set am IF statement with includes method to compare arrays and return not common in empty array
// -Finally return empty array

const firstArray = [1,5,6,8,10,12];
const secondArray = [2,5,7,8,9,11];

function uniqueToEach(fArray,sArray) {
    let emptyArray = [];
    for (let num of fArray)
    if (!sArray.includes(num))
    emptyArray.push(num);
    return emptyArray;
} 

console.log(uniqueToEach(firstArray,secondArray));