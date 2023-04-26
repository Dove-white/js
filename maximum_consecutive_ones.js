//Exercise 2 number 2
//Write a function called getMaxConsecutiveOnes that takes in an array of integers consisting of only 0's and 1's. The function should return the maximum number of consecutive 1's in the array.


function getMaxConsecutiveOnes(num) {
    let prev = -1;
    let result = 0;

    for (let i = 0; i < num.length + 1; i++) {
        if (num[i] !== 1) {
            result = Math.max(result, i - prev -1);
            prev = i;
        }
    }
    
    return result;
}

console.log(getMaxConsecutiveOnes([1,0,1,1,1,0,1,1,1,1]));

//still, it didn't understand it please