// Excercise no 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// I am Printing  the name  whitespace around the name is bieng displayed:
var personName = "\tHassan Shehzad\n";
console.log("Name with whitespace character:");
console.log(personName);
// I am Printing  the name after stripping whitespace characters
{
    var strippedName = personName.trim();
    console.log("\nName after stripping whitespace characters:");
    console.log(strippedName);
}
