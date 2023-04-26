//Exercise(9) number two(2)
//Write a program that takes an array of numbers as input and outputs the average of the numbers.
// -Define an array of number
// -Loop through array
// -Initialized a variable to sum array with reduce method
// -Finally return variable divided by length of array

const numbers = [2,5,8,10,12,15,20];

function averageNum(num) {
  for (let i = 0; i < num.length; i++) {
  const totalNum = num.reduce((sum,currentValue) => sum + currentValue);
    return Math.floor(totalNum / num.length);
  }   
}


// another method without the reduce method.
// function averageNum(num) {
//   let sun = 0;
//   for (let value of num)
//   sun += value;
//   return sun / num.length;
// }

// console.log(averageNum(numbers))

console.log(averageNum(numbers));