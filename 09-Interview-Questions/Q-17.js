function calc(n) {
    let sum = 0;

    for (let i = 0; i < n; i++)
        sum += i;

    return sum;
}

console.time();
let res = calc(1000000000);
console.log(res);
console.timeEnd();

function memoize(cb) {

    let res = {};

    return function (n) {

        if (res[n])
            return res[n];

        else {
            let result = cb(n);
            res[n] = result;
            return result;
        }
    }
}

let efficientCalcFn = memoize(calc);
console.time();
let res2 = efficientCalcFn(1000000000);
console.log("res", res2);
console.timeEnd();

console.time();
let res3 = efficientCalcFn(1000000000);
console.log("res", res3);
console.timeEnd();