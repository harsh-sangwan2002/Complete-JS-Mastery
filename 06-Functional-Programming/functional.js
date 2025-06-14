// Calculate the area, circumference and diameter of circles given their radiuses
// Functional programming says that use functionsm, HOF, map, filter, reduce and break everything down into single price of logic

const calculate = (arr, cb) => {

    let res = [];

    res = arr.map(value => cb(value));

    return res;
}

const calculateArea = (radius) => Math.trunc(Math.PI * radius * radius);
const calculateCircumference = (radius) => Math.trunc(2 * Math.PI * radius);
const calculateDiameter = (radius) => 2 * radius;

let radiuses = [1, 2, 3, 4, 5];
let res = calculate(radiuses, calculateArea);
console.log(res);

res = calculate(radiuses, calculateCircumference);
console.log(res);

res = calculate(radiuses, calculateDiameter);
console.log(res);