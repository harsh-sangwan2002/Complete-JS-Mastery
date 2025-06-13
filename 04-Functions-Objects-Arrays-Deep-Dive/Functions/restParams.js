function sum() {
    let totalSum = 0;

    for (let val of arguments)
        totalSum += val;

    return totalSum;
}

// ES6 (2015)
function sumWithRestParams(...arr) {

    let totalSum = 0;

    for (let val of arr)
        totalSum += val;

    return totalSum;
}

let res = sumWithRestParams(1);
// console.log(res);

res = sumWithRestParams(1, 2);
// console.log(res);

res = sumWithRestParams(1, 2, 3);
// console.log(res);

res = sumWithRestParams(1, 2, 3, 4);
// console.log(res);

function test(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

test(1, 2, 3);
test(1, 2, 3, 4);
test(1, 2, 3, 4, 5);