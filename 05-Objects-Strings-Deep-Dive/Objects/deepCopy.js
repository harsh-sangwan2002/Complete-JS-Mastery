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

// Takes up O(n^2) time -> Very heavy operation
let deepCopiedObj = JSON.parse(JSON.stringify(obj));
deepCopiedObj.address.state.code = 2345;
// console.log(obj);

// Time complexity for this is O(n)
function createdeepCopy(obj) {

    let res = {};

    for (let key in obj) {

        if (typeof obj[key] == 'object')
            res[key] = createdeepCopy(obj[key]);

        else
            res[key] = obj[key];
    }

    return res;
}

deepCopiedObj = JSON.parse(JSON.stringify(obj));
deepCopiedObj.address.state.code = 2345;
console.log(obj);