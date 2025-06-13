let obj = {
    name: "Harsh",
    age: 22,
    address: {
        state: {
            code: 1234,
            name: "Haryana"
        }
    }
}

// This is not a copy
let obj2 = obj;
// obj2.name = "Arvind";
// console.log(obj);

// Shallow copy -> It creates a copy till one nested level
obj2 = { ...obj };
obj2.name = "Sumit";
obj2.address.state = "Los Angeles";
console.log(obj);

// Using create and assign
let obj3 = Object.assign({}, obj);
obj3.address.state = "London";
console.log(obj);

let obj4 = Object.create(obj);
obj4.address.state = "UP";
console.log(obj);

// Use JSON.prase and JSON.stringigy are used to create deep copy
// It takes up O(n2) to crrate the copy
let obj5 = JSON.parse(JSON.stringify(obj));
obj5.address.state = "Oslo";
console.log(obj);