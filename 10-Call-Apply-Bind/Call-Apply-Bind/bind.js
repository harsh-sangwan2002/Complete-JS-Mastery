let obj = {
    firstName: "John",
    lastName: "Doe",
}

function fullName(age) {
    console.log(`My name is ${this.firstName} ${this.lastName} and I am ${age} years old.`);
}

let obj2 = {
    firstName: "Jane",
    lastName: "Smith",
}

// console.log(obj.firstName);
// console.log(obj.fullName());

// Borrow a function using call
// fn.call(thisArg, arg1, arg2, ...)
var bindedFullName = fullName.bind(obj, 30, "extra argument");
bindedFullName(35);