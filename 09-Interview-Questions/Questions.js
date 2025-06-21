// Function Currying
// Question - 12


// Question - 13


// Question - 14
function createEvenStack() {
}

const stack = new createEvenStack();
stack.push(1);
stack.push(2);
console.log("Stack is: ", stack.items);

stack.push(3);
stack.push(4);
console.log("Stack is: ", stack.items);

// prevent this behaviour
// stack.items = [100,200,300];

// Question - 15
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