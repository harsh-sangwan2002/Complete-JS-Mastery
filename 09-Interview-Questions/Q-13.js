// Flatten an object
function flattenObject(obj, parentKey = '', res = {}) {

    for (let key in obj) {

        let newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], newKey, res);
        } else {
            res[newKey] = obj[key];
        }
    }

    return res;
}

let obj = {
    a: 1,
    b: 2,
    c: {
        d: {
            e: 3,
            f: 4
        }
    }
}
// {a:1,b:2,c.d.e:3,c.d.f:4}
let flatObj = flattenObject(obj);
console.log(flatObj);