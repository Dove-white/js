// Exercise 13

/*
 Exercise 13 number 1:
 Write a function called countVowels that takes a string as an argument
 and returns the number of vowels (a, e, i, o, u) in that string. 
 For example, If the input is "hello", the function should return 2.
*/

 // -Define strings of sentence
 // -Initialize a variable to hold the count
 // -Loop through with for of Loop
 // -Initialize another variable to hold the transformation of string to lower case
 // -Am IF statement to compare vowels with the second variable and add it to count
 // -Finally return count

 const sentence = "I am a Developer";

 function countVowels(sentence) {
   let count = 0;
 
   for (let value of sentence) {
     let wordTransformed = value.toLowerCase();
 
     if (
       wordTransformed === "a" ||
       wordTransformed === "e" ||
       wordTransformed === "i" ||
       wordTransformed === "o" ||
       wordTransformed === "u"
     )
       count += 1;
   }
   
   return count;
 }
 
 console.log(countVowels(sentence));
 
 
 
 /*
  Exercise 13 number 2:
  Write a function called findAverage that takes an array of numbers as an argument
  and returns the average of those numbers. For example, if the input is
  [1, 2, 3, 4, 5], the function should return 3.
 */
 
  // -Define an array of numbers
  // -Initialize a variable to hold the total sum
  // -Loop through with for of Loop and add the value to sum
  // -Finally return the sum divided by the length
 
 const numbers = [1,2,3,4,5];
 
 function average(num) {
     let sum =0;
 
     for(let value of num)
     sum += value;
 
     return sum / num.length;
 }
 
 console.log(average(numbers));