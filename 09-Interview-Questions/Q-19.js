function deepClone(obj) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let res = Array.isArray(obj) ? [] : {};

    for (let key in obj)
        res[key] = deepClone(obj[key]);

    return res;
}

let obj = { a: 1, b: { c: 2, d: { e: 3 } } };
let obj2 = deepClone(obj);
obj2.b.c = 4;
console.log(obj);

let arr = [1, 2, [3, [4], 5], 6, 7];
let arr2 = deepClone(arr);
arr2[2][0] = 8;
console.log(arr);