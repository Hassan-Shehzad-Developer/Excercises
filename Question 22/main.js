"use strict";
// Exercise no 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let Fruit = ["Mango","Banana","Orange"];
// console.log(Fruit[2]); // Accessing index 3, which is out of bounds
{
    let StudentResult = [
        { name: "Hassan", Class: "10th", SecuredMarks: 88, Grade: "A" },
        { name: "Sheraz", Class: "10th", SecuredMarks: 90, Grade: "A" },
        { name: "Ramzan", Class: "10th", SecuredMarks: 78, Grade: "B" },
        { name: "Salamn", Class: "10th", SecuredMarks: 65, Grade: "C" },
    ];
    //   Accessing index 0, which is in the bounds
    console.log(StudentResult[0]);
    //   Accessing index 4, which is out of bounds
    console.log(StudentResult[4]);
    StudentResult.forEach(StudentResult => {
        console.log(`StudentResult: ${StudentResult.name}, Class: ${StudentResult.Class}, SecuredMarks: ${StudentResult.SecuredMarks}, Grade: ${StudentResult.Grade}`);
    });
}
