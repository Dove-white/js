//Exercise(8) number one(1)
//Write a function that takes a string as an argument and returns the string with all the vowels removed.
// -Define a sentence with string
// -Initialize a variable to hold an empty string
// -Loop through sentence
// -Initialize another variable to hold lowerCase method
// -An IF statement to exclude vowels and add to the variable
// -Finally return the variable

const sentence = 'My name is somebody';

function removeVowels(word) {
    let remove = '';
    for (let i = 0; i < word.length; i++){
      const allCases = word[i].toLowerCase();
      if (
         allCases !== 'a'
      && allCases !== 'e'
      && allCases !== 'i'
      && allCases !== 'o' 
      && allCases !== 'u'
      )
        remove += allCases;
  }
  return remove;
}

console.log(removeVowels(sentence));