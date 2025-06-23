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
    let cache = {};

    return function (n) {

        if (cache[n])
            return cache[n];

        else
            return cache[n] = cb(n);
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