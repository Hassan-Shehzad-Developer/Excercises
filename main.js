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
var qoute = "Patience ensures victory.";
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
// Excercise no (7,8)
// 7. Number Eight:  8. You should create four lines that look like this:
//Addition for getting number 08
var a = 5 + 3;
console.log("5+3 = ", a);
//Substraction for getting number 08
var b = 10 - 2;
console.log("10-2 = ", b);
//Multiplication for getting number 08
var c = 4 * 2;
console.log("4*2 = ", c);
//Division for getting number 08
var d = 32 / 4;
console.log("32/4 = ", d);
console.log("Addition,substruction,multiplication,division");
// Excercise no 9
// Favorite Number:
var favoriteNum = 14;
var number = "My favorite number is \"".concat(favoriteNum, "\"");
console.log(number);
