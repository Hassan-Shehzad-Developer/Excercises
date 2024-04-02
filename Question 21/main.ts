// Exercise no 21:
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define TypeScript objects for storing information about Students Result:
let StudentResult = [
  { name: "Hassan", Class: "10th", SecuredMarks: 88, Grade: "A" },
  { name: "Sheraz", Class: "10th", SecuredMarks: 90, Grade: "A" },
  { name: "Ramzan", Class: "10th", SecuredMarks: 78, Grade: "B" },
  { name: "Salamn", Class: "10th", SecuredMarks: 65, Grade: "C" },
];
console.log(StudentResult);

// Print information about each Student:

StudentResult.forEach(StudentResult => {
console.log(`StudentResult: ${StudentResult.name}, Class: ${StudentResult.Class}, SecuredMarks: ${StudentResult.SecuredMarks}, Grade: ${StudentResult.Grade}`)});


