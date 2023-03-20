//Exercise(10) number two(2)
//Write a function that takes two arrays as input and returns a new array with only the elements that are unique to each array.
// -Define two arrays of numbers
// -Initialize two variable to hold am empty arrays
// -Loop through first array
// -Set am IF statement with includes method to compare arrays and return the not common into first empty array
// -Loop through second array
// -Set am IF statement with includes method to compare arrays and return the not common into second empty array
// -Finally return two empty arrays with concat method

const firstArray = [1,5,6,8,10,12];
const secondArray = [2,5,7,8,9,11];

function uniqueToEach(fArray,sArray) {
    let emptyArray1 = [];
    let emptyArray2 = [];

    for (let num of fArray)
    if (!sArray.includes(num))
    emptyArray1.push(num);

    for (let num2 of sArray)
    if (!fArray.includes(num2))
    emptyArray2.push(num2);

    return emptyArray1.concat(emptyArray2).sort((a,b) => a -b);
} 

console.log(uniqueToEach(firstArray,secondArray));