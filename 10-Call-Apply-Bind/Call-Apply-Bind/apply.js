let obj = {
    firstName: "John",
    lastName: "Doe",
}

function fullName(...arr) {
    console.log(`My name is ${this.firstName} ${this.lastName} and I am ${arr[0]} years old.`);
}

let obj2 = {
    firstName: "Jane",
    lastName: "Smith",
}

// console.log(obj.firstName);
// console.log(obj.fullName());

// Borrow a function using call
// fn.call(thisArg,[])
fullName.apply(obj, [30, 20, 10]);