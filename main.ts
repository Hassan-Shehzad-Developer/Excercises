// Excercise no 2:
// Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
{
  let personName: string = "Hassan";
  console.log(`Hello Hassan,would you like to learn some Python today? `);
  
}

// Excercise no 3
//  Name Cases:
// lowerCase
// uperCase
// TitleCase
{
  let personName = "Hassan";
  console.log("personName");

  console.log("lowerCase = ", personName.toLowerCase());
  console.log("upperCase = ", personName.toUpperCase());
  console.log(
    "toTitleCase = ",
    personName
      .toLocaleLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}

// Excercise no 4
// Famous Quote:

let qoute = "Patience ensures victory";
console.log(qoute);

// Excercise no 5
// Famous Quote 2

let famousPerson: "Ali Ibn Abi Talib";
let message = "Surely silence can sometimes be the most eloquent reply";
console.log(message);

// Excercise no 6
// Stripping Names:
// Store the person's name with whitespace characters

let myName = "\t  Hassan \n";
console.log("nameWithWhiteSpace = ", myName);

// Strip whitespace characters from the beginning and end of the name

let strippedName = myName.trim();

console.log("Stripped Name:", strippedName);

// Excercise no (7,8)

// 7. Number Eight:  8. You should create four lines that look like this:

//Addition for getting number 08
//Substraction for getting number 08
//Multiplication for getting number 08
//Division for getting number 08

let a = 5 + 3;
console.log("5+3 = ", a);

let b = 10 - 2;
console.log("10-2 = ", b);

let c = 4 * 2;
console.log("4*2 = ", c);

let d = 32 / 4;
console.log("32/4 = ", d);

console.log("Addition,substruction,multiplication,division");

// Excercise no 9

// Favorite Number:

let favoriteNum = 14;
let number = `My favorite number is ${favoriteNum}`;

console.log(number);

