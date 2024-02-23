// Excercise no 1

// Install = Node-js, Typescript, VS code on your computer
// Done.

// Excercise no 2

// Personal Message:

console.log("Hello World project 1");

let personName: string = "Hassan";

console.log("Hello Hassan,would you like to learn some Python today? ");

// Excercise no 3

//  Name Cases:

// lowerCase

console.log("lowerCase = ", personName.toLowerCase());

// uperCase

console.log("upperCase = ", personName.toUpperCase());

// TitleCase

console.log(
  "toTitleCase = ",
  personName.toLocaleLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
);
