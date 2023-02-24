alert('hello world');
prompt('Soke');

//Exercise(5) number one(1)
//Write a function that takes an array of numbers and returns the largest number in the array.

// This is the Pseudocode
//- we set a function of largestArray to it's prim array.
//- we set a variable of largestNumber to the first index of the array.
//- we set a FOR loop by initializing index to 1 and set a condition of the length of am array greater than index and increment index.
//- we set am IF statement of index of array greater than largestNumber, and equalize both.
//- we return largestNumber.

// the code.
function largestArray(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++)
      if (array[i] > largestNumber)
        largestNumber = array[i];
    return largestNumber;
  }
  
  let evenNumbers = [2,4,6,8,10];
  console.log(largestArray(evenNumbers));// this will print 10(the largest).
// done.