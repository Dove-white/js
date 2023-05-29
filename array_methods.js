// Exercise 4
/*
-Create an array of objects called characters. Each object should have the following properties:

-name: the name of the character (string)
-age: the age of the character (number)
-occupation: the occupation of the character (string)
-weapon: the character's weapon of choice (string)

Method
-Use the forEach method to log each character's name to the console.
-Use the filter method to create a new array containing only the characters who are over 25 years old.
-Use the map method to create a new array containing only the names of the characters.
-Use the reduce method to calculate the total age of all the characters.
-Use the sort method to sort the characters by age from oldest to youngest.
*/

const characters = [
    { name: "Mr.A", age: 34, occcupation: "Gangster", weapon: "gun" },
    { name: "Mr.B", age: 26, occcupation: "Pastor", weapon: "bible" },
    { name: "Mr.C", age: 52, occcupation: "Banker", weapon: "money" },
    { name: "Mr.D", age: 20, occcupation: "Boxer", weapon: "strenth" },
  ];
  
  // forEach method
  const forEachMethod = characters.forEach((propaty) => {
    console.log(propaty.name);
  });
  
  // filter method
  const filterMethod = characters.filter((value) => value.age > 25);
  
  console.log('characters who are over 25 years old; ');
  console.log(filterMethod);
  
  // map method
  const mapMethod = characters.map((propaty) => propaty.name);
  
  console.log('only the names of the characters; ');
  console.log(mapMethod);
  
  //reduce method
  const reduceMethod = characters.reduce((value, currentValue) => {
    return value + currentValue.age;
  }, 0);
  
  console.log('the total age of all the characters; ');
  console.log(reduceMethod);
  
  // sort method
  const sortMethod = characters.sort((youngest, oldest) => oldest.age - youngest.age);
  
  console.log('age from oldest to youngest; ');
  console.log(sortMethod);