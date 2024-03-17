// Excercise no 3:
//  Name Cases: Store a person’s name in a variable,and 
//  then print that person’s name in lowercase, uppercase, and titlecase.



{
let personName = "Hassan";
console.log("personName");
console.log("lowerCase = ", personName.toLowerCase()); 
console.log("upperCase = ", personName.toUpperCase());
console.log("toTitleCase = ", personName.toLocaleLowerCase() .replace(/\b\w/g, (char) => char.toUpperCase()));
}
