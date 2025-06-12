// obj -> 2k, 8k
let obj = {
    name: "Harsh",
    age: 22,
    address: {
        state: {
            code: 122001,
            name: "Haryana"
        }
    }
}

// Shallow copy
// obj2 -> 4k, 8k
let obj2 = { ...obj };
obj2.name = "Arvind";
obj2.address.state.name = "New Delhi";
console.log(obj);

let obj3 = Object.assign({}, obj);
console.log(obj3);

let obj4 = Object.create(obj);
console.log(obj4.address.state.name);

let obj5 = JSON.parse(JSON.stringify(obj));
obj5.address.state.name = "USA";
console.log(obj5);
console.log(obj);