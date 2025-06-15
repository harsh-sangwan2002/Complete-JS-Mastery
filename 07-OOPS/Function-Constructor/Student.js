// We wan't to create a student object having name, age and roll number
// let ram = {
//     name: "Ram",
//     age: 20,
//     rollNumber: 101
// }

// let shyam = {
//     name: "Shyam",
//     age: 22,
//     rollNumber: 102
// }

// There is not concept of class in JS, function constructors are used to create objects
// function Student(age, name, rollNumber) {
//     let obj = {};
//     obj.age = age;
//     obj.name = name;
//     obj.rollNumber = rollNumber;
//     return obj;
// }

function Student(age, name, rollNumber) {
    this.age = age;
    this.name = name;
    this.rollNumber = rollNumber;
}

Student.prototype.printName = function () {
    console.log(this.name);
}

// While using new keyword the function constructor behaves like a class
// It creates a new object and assigns it to this
// It also returns the object created by the function constructor
let ram = new Student(20, "Ram", 101);
let shyam = new Student(22, "Shyam", 102);
// console.log(ram.__proto__ == Student.prototype); // true
ram.printName();

// Arrow functions don't act like constructors
const arrowFn = (name, age, no) => {
    this.name = name;
    this.age = age;
    this.no = no;
}

var sita = new arrowFn("Sita", 21, 103); // This will not work as expected