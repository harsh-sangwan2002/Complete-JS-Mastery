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

function deepCopy(obj) {

    let res = {};

    for (let key in obj) {

        if (typeof obj[key] !== 'object')
            res[key] = obj[key];

        else
            res[key] = deepCopy(obj[key]);
    }

    return res;
}

let obj2 = deepCopy(obj);
obj2.address.state = "London";
console.log(obj);