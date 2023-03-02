//Exercise(6) number two(2)
//Write a function that takes a string as an argument and returns the number of vowels in the string.
// -Define string
// -Initialized a count variable to zero(0)
// -Loop through the string
// -Initialized a variable to hold the string with lowerCase method 
// -An IF statements to compare vowels
// -Assign count +1
// -Finally return count

const sentence = 'my name is somebody';
function numberOfVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++){
    let method = word[i].toLowerCase();
    if (method === 'a'|| method === 'e'|| method === 'i'|| method === 'o' || method === 'u')
     count += 1;
  }
  return count;
}
console.log(numberOfVowels(sentence));