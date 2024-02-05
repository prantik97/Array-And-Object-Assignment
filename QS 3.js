// 3. Object Extensibility and Sealing

// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
// b) Use the ObjectisExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.

// c) Create a new object called teacher with a ‘subject’ property set to ‘Math’.

// d) Use the Objectseal method to seal the teacher object, preventing any additions or deletions of properties.

// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.

// f) Print the extensibleStatus and sealedStatus to the console.

// Create a student object
let student = {
    name: "Shubham",
    age: 24,
    grade: "A"
};

// a) Use the Object.preventExtensions method
Object.preventExtensions(student);

// b) Use the Object.isExtensible method
let extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher
let teacher = {
    subject: "Math"
};

// d) Use the Object.seal method
Object.seal(teacher);
// Try to add a new property
teacher.newProperty = "History";

// Modify an existing property
teacher.subject = "Physics";

console.log(teacher); // Output: { subject: 'Physics' }

// In this example, after calling Object.seal(teacher), attempting to add a new property or 
// delete an existing property will have no effect, but modifying the value of 
// an existing property is still allowed.

// e) Use the Object.isSealed method
let sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log("Extensible status of student object:", extensibleStatus); // Output: Extensible status of student object: false
console.log("Sealed status of teacher object:", sealedStatus); // Output: Sealed status of teacher object: true
