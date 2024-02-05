// 5. You are given a JavaScript object representing a student's information. Your task is to use the ‘for...in' loop
// to iterate over the properties of the object and perform various operations.

// JavaScript
// const student = {
// name: "Alice",
// age: 22,
// major: “Computer Science",
// GPA: 3.8,
// isEnrolled: true
// };

// a. Create a function displayStudentinfo that takes the student object as a parameter. Inside this function, use a
// ‘for..in’ loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console. The output should look something like this:

// JavaScript

// Property: name, Value: Alice

// Property: age, Value: 22

// Property: major, Value: Computer Science

// Property: GPA, Value: 3.8

// Property: isEnrolled, Value: true

// -------------------------------------**-----------------------------------------------
const student = {
name: "Alice",
age: 22,
major: "Computer Science",
GPA: 3.8,
isEnrolled: true
};

function displayStudentinfo(obj) {

    for (let property in obj) {

        console.log(`Property: ${property} , Value: ${obj[property]} `);
    }

}

displayStudentinfo(student);
// Output: 
// Property: name , Value: Alice 
// Property: age , Value: 22 
// Property: major , Value: Computer Science 
// Property: GPA , Value: 3.8 
// Property: isEnrolled , Value: true 