alert('hello world');
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