/*
Exercise 5
A JavaScript program that models a library, and should have a function that will add, remove and also list the properties in it.

// For adding
-Define an array of object.
-Initialize a variable to hold the element and add it to array of object with push method.

// For removing
-Initialize another variable to hold one of the value in the object to remove with a filter method to return not equal to the value.

// For listing
-Define a callback function with the forEach method.
-Finally print the callback.

// For counting
-Initialize a variable to hold a push method and finally print the variable.
*/

let library = [
  {
    title: "At The Heart Of Leadership",
    author: "Joshua Freedman",
    yearOfPublication: 2019,
  },
  {
    title: "Forgive Yourself These Tiny Acts Of Self-Destruction",
    author: "Jared Singer",
    yearOfPublication: 2007,
  },
  {
    title: "Being The Best Version Of You",
    author: "Charlotte Moore",
    yearOfPublication: 2010,
  },
  { title: "The Future", author: "Neil Hilborn", yearOfPublication: 2018 },
];

// For adding
let bookAdded = {
  title: "You Better Be Lighting",
  author: "Andrea Gibson",
  yearOfPublication: 2015,
};
library.push(bookAdded);
console.log(library);

// For removing
const propertiesRemove = "The Future";
const removeMethod = library.filter(
  (properties) => properties.title !== propertiesRemove
);
console.log(removeMethod);

// For counting
let numberOfBooks = library.push();
console.log("There are " + numberOfBooks + " books in the library");

// For listing
library.forEach((properties) => console.log(properties));
