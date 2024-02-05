// 4. Assignment: Building a Student Management System

// Description:

// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.

// Requirements:
// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.

// JavaScript
// const students = [
    // { id: 1, firstName: "John", lastName: "Doe", age: 28, grade: "A" },
    // { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    // { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },

//  Add more students as needed

// ];

// Implement the following functions using pure JavaScript (without any external libraries or frameworks):

// a. Add a Student: Create a function to add a new student to the array.

// b, Update Student Information: Create a function to update a student's information based on their id.

// c. Delete a Student: Create a function to delete a student based on their id.

// d. List All Students: Create a function to display a list of all students.

// e. Find Students by Grade: Create a function to find all students who have a specific grade.

// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.


//----------------------------------**------------------------------------------------------

let students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },

    // Add more students as needed
];

//----------------------------------**-----------------------------------------------------

// a. Add a Student: Create a function to add a new student to the array.
function addNewStudent(newStudent) {
    students.push(newStudent);
}

// Example usage:
const newStudent = { id: 4, firstName: "Alice", lastName: "Nicolus", age: 23, grade: "C" };
addNewStudent(newStudent);
console.log(students); // Output : [
//                  { id: 1, firstName: 'John', lastName: 'Doe', age: 28, grade: 'A' },
//                  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//                  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
//                  { id: 4, firstName: 'Alice', lastName: 'Nicolus', age: 23, grade: 'C'}
//   ]

//----------------------------------**-----------------------------------------------------------

// b, Update Student Information: Create a function to update a student's information based on their id.

function updateStudent(id, updatedInfo) 
{
    const index = students.findIndex(student => student.id === id);
    if (index == -1) 
    {
        console.log("Student not found!");
        
    } 
    else 
    {
        students[index] = { ...students[index], ...updatedInfo };
    }
}
updateStudent(3, { lastName: 'Payne',age: 20, grade: "A" });
console.log("After updating student information:",students);

// Output: After updating student information the student record will be: 
// [
//   { id: 1, firstName: 'John', lastName: 'Doe', age: 28, grade: 'A' },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
//   { id: 3, firstName: 'Bob', lastName: 'Payne', age: 20, grade: 'A' },
//   { id: 4,firstName: 'Alice',lastName: 'Nicolus',age: 23,grade: 'C'}
// ]

//----------------------------------**---------------------------------------------------------

// c. Delete a Student: Create a function to delete a student based on their id.

function deleteStudent(id){
    
    const index = students.findIndex(student => student.id === id);
    if (index == -1) 
    {
        console.log("Student not found!");
        
    } 
    else 
    {
        students.splice(index,1);
    }
}
deleteStudent(4);
console.log("After deleting a student the student record will be:",students);
// Output: After deleting a student the student record will be: 
// [
//   { id: 1, firstName: 'John', lastName: 'Doe', age: 28, grade: 'A' },
//   { id: 3, firstName: 'Bob', lastName: 'Payne', age: 20, grade: 'A' },
//   { id: 4,firstName: 'Alice',lastName: 'Nicolus',age: 23,grade: 'C'}
// ]

//----------------------------------**---------------------------------------------------------

// d. List All Students: Create a function to display a list of all students.

function displayStudents() {

    console.log("List of students:");
    students.forEach(student => {
        console.log(`Id: ${student.id}, First Name: ${student.firstName}, Last Name: ${student.lastName}, Age:${student.age}, Grade: ${student.grade}`);
    })
}

displayStudents();
// Output: List of students:
// Id: 1, First Name: John, Last Name: Doe, Age:28, Grade: A
// Id: 2, First Name: Jane, Last Name: Smith, Age:22, Grade: B
// Id: 3, First Name: Bob, Last Name: Payne, Age:20, Grade: A

//----------------------------------**------------------------------------------------------

// e. Find Students by Grade: Create a function to find all students who have a specific grade.
function findStudents(grade) {

    const searchObject= students.filter((student) => student.grade == grade);
    return searchObject;
}

console.log("Found Students with given grade:" ,findStudents('A'));
// Output: Found Students with given grade: [
//   { id: 1, firstName: 'John', lastName: 'Doe', age: 28, grade: 'A' },
//   { id: 3, firstName: 'Bob', lastName: 'Payne', age: 20, grade: 'A' }
// ]

//----------------------------------**-----------------------------------------------------

// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

function getAverageAge() 
{
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    const averageAge = totalAge / students.length;
    return averageAge;
}
const averageAge = getAverageAge();
console.log("Average age of all students:", averageAge); 
// Output: Average age of all students: 23.333333333333332



