// Excercise no 3
//  Name Cases:   1. lowerCase,  2. uperCase, 3. TitleCase

{
  let personName = "Hassan";
  console.log("personName");

   console.log("lowerCase = ", personName.toLowerCase()); 

   console.log("upperCase = ", personName.toUpperCase());

   console.log("toTitleCase = ", personName.toLocaleLowerCase() .replace(/\b\w/g, (char) => char.toUpperCase()));
}
