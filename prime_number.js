//Write a function to check if a number is prime.
// -Return the number divisible by 2 reminder one or number equal to two.

function primeNum(num) {
    return (num % 2 === 1 || num === 2);
}

console.log(primeNum(27));