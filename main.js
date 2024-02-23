// Excercise no 1
// Install = Node-js, Typescript, VS code on your computer
// Done.
// Excercise no 2
// Personal Message:
console.log("Hello World project 1");
var personName = "Hassan";
console.log("Hello Hassan,would you like to learn some Python today? ");
// Excercise no 3
//  Name Cases:
// lowerCase
console.log("lowerCase = ", personName.toLowerCase());
// uperCase
console.log("upperCase = ", personName.toUpperCase());
// TitleCase
console.log("toTitleCase = ", personName.toLocaleLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Excercise no 4
// Famous Quote:
var qoute = "Quid-e-Azam Muhammad Ali Jinnah once said, Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.";
console.log("\"".concat(qoute, "\""));
// Excercise no 5
// Famous Quote 2
var famousPerson;
console.log("Surely silence can sometimes be the most eloquent reply");
console.log("{famousPerson} \"{message}\"");
// Excercise no 6
// Stripping Names:
// Store the person's name with whitespace characters
var myName = "\t  Hassan \n";
console.log("nameWithWhiteSpace = ", myName);
// Strip whitespace characters from the beginning and end of the name
var strippedName = myName.trim();
console.log("Stripped Name:", strippedName);
