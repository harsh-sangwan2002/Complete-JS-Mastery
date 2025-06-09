const sym = Symbol("abc")
let obj = {
    name: "Harsh",
    age: 22,
    email: "hsangwan2002@gmail.com",
    isMarried: false,
    address: {
        country: "India",
        state: "Haryana",
        code: "122001"
    },
    [sym]: 123,
}
// console.log(obj);

// You can Dot operator for extracting the properties inside an object
// console.log(obj.name);
// console.log(obj.address.country);

// You can also use the [] operator
// console.log(obj["name"]);

// let key = "address";
// console.log(obj.key);
// console.log(obj[key]);

for (let key in obj) {
    console.log(obj.key);
    console.log(obj[key]);
}