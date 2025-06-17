// function Student(name, age, subjects) {
//     let obj = {};
//     obj.name = name;
//     obj.age = age;
//     obj.subjects = subjects;
//     obj.getDetails = function () {
//         return `Name: ${this.name}, Age: ${this.age}, Subjects: ${this.subjects.join(", ")}`;
//     };
//     return obj;
// }

function Student(name, age, subjects) {
    this.name = name;
    this.age = age;
    this.subjects = subjects;
}

Student.prototype.getDetails = function () {
    return `Name: ${this.name}, Age: ${this.age}, Subjects: ${this.subjects.join(", ")}`;
}

let ram = new Student("Ram", 20, ["Math", "Science", "English"]);
console.log(ram);
console.log(ram.getDetails());

let shyam = new Student("Shyam", 22, ["History", "Geography"]);
console.log(shyam);

console.log(Student.prototype);