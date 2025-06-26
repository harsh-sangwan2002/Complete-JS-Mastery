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

Function.prototype.apply = function (obj, arr) {

    obj.tempFn = this;

    obj.tempFn(...arr);

    delete obj.tempFn;
}

// console.log(obj.firstName);
// console.log(obj.fullName());

// Borrow a function using call
// fn.call(thisArg,[])
fullName.apply(obj, [30, 20, 10]);