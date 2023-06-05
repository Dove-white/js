
//Exercise 6
/*
Write a JavaScript function called `countObjectProperties` that takes an object as an argument and returns the number of properties (keys) in that object. The function should only count the properties that are directly defined on the object and not inherited from its prototype.

For example, given the following object:

const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

The function `countObjectProperties(person)` should return `3`, since there are three properties (`name`, `age`, and `occupation`) defined directly on the `person` object.

Here are a few additional requirements for the challenge:

NOTE:
- You should not use any external libraries or built-in functions that directly give you the count of properties.
- You should not modify the object or its prototype.
*/

// -Define an object
// -Initialize a variable to hold the count
// -Initialize another variable to hold an empty array
// -Loop with a for in loop
// -Push properties into the second variable and add it's length to the first variable
// -Finally return the first variable


const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};


function countObjectProperties(obj) {
    let sum = 0;
    let emptyArray = [];

    for(let key in obj)
    emptyArray.push(key);

    return sum += emptyArray.length;
}

console.log(countObjectProperties(person));