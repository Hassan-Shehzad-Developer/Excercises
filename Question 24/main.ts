// Exercise no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// • Tests for equality and inequality with strings

let fruit = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');

let color = 'blue';
console.log("Is color not equal to 'red'? I predict True.");
console.log(color != 'red');

// • Tests using the lower case function

let word = 'HELLO';
console.log("Is 'hello' equal to the lowercase version of word? I predict True.");
console.log('hello' == word.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num = 10;
console.log("Is num equal to 10? I predict True.");
console.log(num == 10);

console.log("Is num greater than 5? I predict True.");
console.log(num > 5);

// • Tests using "and" and "or" operators

let x = 5;
let y = 7;
console.log("Is x greater than 3 and y less than 10? I predict True.");
console.log(x > 3 && y < 10);

console.log("Is x equal to 5 or y equal to 8? I predict True.");
console.log(x == 5 || y == 8);

// • Test whether an item is in a array

let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// • Test whether an item is not in a array

let animals = ['cat', 'dog', 'rabbit'];
console.log("Is 'elephant' not in the animals array? I predict True.");
console.log(!animals.includes('elephant'));







