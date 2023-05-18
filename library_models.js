/*
Exercise 5
A JavaScript program that models a library, and should have a function that will add, remove and also list the proparties in it.

// For adding
-Define an array of object.
-Initialize a vareable to hold the element and add it to array of object with push method.

// For removing
-Initialize another vareable to hold one of the value in the object to remove with a filter method to return not equle to the value.

// For listing
-Define a callback function with the map method.
-Loop through with for in loop.
-Finally return the proparties and the proparties values.
*/

let library = [
    {title:'At The Heart Of Leadership', author:'Joshua Freedman', yearOfPubilcation:2019},
    {title:'Forgive Yourself These Tiny Acts Of Self-Destrgaction', author:'Jared Singer', yearOfPubilcation:2007},
    {title:'Being The Best Version Of You', author:'Charlotte Moore', yearOfPubilcation:2010},
    {title:'The Future', author:'Neil Hilborn', yearOfPubilcation:2018}, 
];

// For adding
let p = {title:'You Better Be Lighting', author:'Andrea Gibson', yearOfPubilcation:2015};
library.push(p);
console.log(library);

// For removing
const propartiesRemove = 'The Future';
let removeMethod = library.filter((proparties) => proparties.title !== propartiesRemove);
console.log(removeMethod);


// For listing
removeMethod.map(value=> {
    for(let proparties in value)
    console.log(`${proparties}:${value[proparties]}`);
});