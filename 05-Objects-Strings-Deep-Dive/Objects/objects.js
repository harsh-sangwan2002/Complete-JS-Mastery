// Object literal
let obj = {
    name: "Harsh",
    age: 22,
    address: {
        state: {
            code: 1234,
            name: "Haryana"
        }
    }
};

// Every function and object has access to .Prototype and .__proto__ property
// Using object.create()
let obj2 = Object.create(obj);
// console.log(obj2);
// console.log(obj2.name);

let obj3 = {};
Object.defineProperty(obj3, 'name', {
    value: 'Harsh',
    enumerable: true
})
Object.defineProperty(obj3, 'age', {
    value: 22,
    enumerable: false
})
// console.log(obj3.age);

for (let key in obj3) {
    console.log(obj3[key]);
}