//Exercise
// Posteros has a grading policy that assigns final grades based on the average of a student's test scores. The final grade is determined according to the following table:
// Average Score	Final Grade
// >= 90		=>	O
// >= 80		=>	E
// >= 70		=>	A
// >= 55		=>	P
// >= 40		=>	D
// < 40		=>	T
// Write a JavaScript function called calculateGrade that takes an array of test scores as its input and returns the final grade according to the Posteros grading policy.

// -Initialize a variable to hold the total sum of scores with a reduce method and dived by the length
// -Finally an IF statement to each score and return their grades

function calculateGrade(scores){
    let average = (scores.reduce((a,b) => a + b)) / scores.length;
 
    if (average >= 90) return 'O';
    if (average >= 80) return 'E';
    if (average >= 70) return 'A';
    if (average >= 55) return 'P';
    if (average >= 40) return 'D';
    else return 'T';
 }

 // another method.

// function calculateGrade(grade) {
//     let gNote = gradeNote(grade);  
//     if (gNote >= 90) return "O";
//     if (gNote >= 80) return "E";
//     if (gNote >= 70) return "A";
//     if (gNote >= 55) return "P";
//     if (gNote >= 40) return "D";
//     else return "T";
// }

// function gradeNote(score) {
//   let sum = 0;
//   for (let num of score) sum += num;
//   return sum / score.length;
// }

 
 console.log(calculateGrade([80, 90, 95, 87]));
 console.log(calculateGrade([75, 85, 80, 90]));
 console.log(calculateGrade([60, 70, 75, 80]));
 console.log(calculateGrade([45, 55, 60, 70]));
 console.log(calculateGrade([35, 40, 50, 55]));
 console.log(calculateGrade([30, 25, 40, 35]));