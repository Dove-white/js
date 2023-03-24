//Exercise(12)
//Write a function to find the factorial of a number.
// -Initialize a variable to hold am empty array
// -Set am IF statement, print one if number  equal zero 
// -Loop through the number
// -Push index into empty array
// -Finally return empty array with reduce method to multiple

function factorials(num) {
    let emptyArray = [];
    if (num === 0) return 1;
    for (let i = 1; i <= num; i++) {
        emptyArray.push(i);
    }
    return emptyArray.reduce((a,b) => a * b);
}

console.log(factorials(6));