//Write a function to check if a number is prime.
// -Loop through the number to include two
// -Set an IF statement to return not prime, if number divisible by index and less than two. 
// -Finally return true.

function primeNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return 'notPrime';
    }
    if (num < 2) return 'notPrime';
    return 'prime';
}

console.log(primeNum(2));