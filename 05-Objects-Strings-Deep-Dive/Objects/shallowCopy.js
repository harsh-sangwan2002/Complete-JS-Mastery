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

let obj2 = obj;
// obj2.name = "Vinay";
// console.log(obj);

// Shallow copy -> Using rest parameters introduced in ES6(2015)
// Spread
// obj2 = { ...obj };
// obj2.name = "Vivek";
// obj2.address.state.code = 2345;
// console.log(obj);

// Using Object.assign
// obj2 = Object.assign({}, obj);
// obj2.name = "Vivek";
// obj2.address.state.code = 2345;
// console.log(obj);

// Using Object.create
obj2 = Object.create(obj);
obj2.name = "Vivek";
obj2.address.state.code = 2345;
console.log(obj);