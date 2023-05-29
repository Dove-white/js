/*
Exercise 5
A JavaScript program that models a library, and should have a function that will add, remove and also list the properties in it.

// For adding
-Define an array of object.
-Initialize a variable to hold the element and add it to array of object with push method.

// For removing
-Define a variable to hold a filter method with a callback function to compar.
-Finally print the variable on the console with a forEach method.

// For counting
-Print the variable of the program with the length syntax on the console.

// For listing
-Define a callback function with the forEach method.
-Loop through with a for in loop and finally return properties with the property values.
*/

let library = [
  {
    id: 0,
    title: "At The Heart Of Leadership",
    author: "Joshua Freedman",
    yearOfPublication: 2019
  },
  {
    id: 1,
    title: "Forgive Yourself These Tiny Acts Of Self-Destruction",
    author: "Jared Singer",
    yearOfPublication: 2007,
  },
  {
    id: 2,
    title: "Being The Best Version Of You",
    author: "Charlotte Moore",
    yearOfPublication: 2010,
  },
  { id: 3, title: "The Future", author: "Neil Hilborn", yearOfPublication: 2018 },
];

// For adding
let singleBook = {
  id: 4,
  title: "You Better Be Lighting",
  author: "Andrea Gibson",
  yearOfPublication: 2015,
};
library.push(singleBook);

// For removing
const filterBooks = library.filter(
  (book) => book.id === 1
);
filterBooks.forEach(book => console.log(book));

// For counting
console.log("There are " + library.length + " books in the library");

// For listing
library.forEach((book) => {
  for(let properties in book)
  console.log(properties + ': ' + book[properties]);
});