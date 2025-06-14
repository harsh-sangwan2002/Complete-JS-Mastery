// Calculate the area, circumference and diameter of circles given their radiuses

function calculateArea(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(Math.trunc(Math.PI * arr[i] * arr[i]));

    return res;
}

function calculateDiameter(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(2 * arr[i]);

    return res;
}

function calculateCircumference(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++)
        res.push(Math.trunc(2 * Math.PI * arr[i]));

    return res;
}

let radiuses = [1, 2, 3, 4, 5];

let areas = calculateArea(radiuses);
console.log(areas);

let circumferences = calculateCircumference(radiuses);
console.log(circumferences);

let diameters = calculateDiameter(radiuses);
console.log(diameters);