//Exercise(12)
//Write a function to find the factorial of a number.
// -Initialize a variable to hold am empty array
// -Loop through the number
// -Set am IF statement, number divisible by index equal zero and push into empty array
// -Finally return empty array

function factors(num) {
    let emptyArray = [];
    for (let i = 0; i <= num; i++) {
        if ( num % i === 0)
        emptyArray.push(i);
    }
    return emptyArray;
}

console.log(factors(24));