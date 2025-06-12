let arr = [1, 2, 3, "3", true, Symbol("123"), null, undefined];

// Imperative way of writing code
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 1. for-each function -> doesn't return anything
// function expecting a function -> then the function which is being accepted is called as a callback function
var x = arr.forEach(function (value) {
    // console.log(value);
})
// console.log(x);
// console.log(typeof arr.forEach);

// 2. map -> maps the values of the array to the corresponding value provided
// Whatever you return from the callback function that will be stored inside a new array
arr = [1, 2, 3, 4];
let arr2 = arr.map(function (value, index, arr) {
    return value ** 2;
})
console.log(arr);
console.log(arr2);

// 3. filter -> filter based on the codition
// filter out the even elements
let evenElements = arr.filter((value, index, arr) => value % 2 == 0 ? true : false);
console.log(evenElements);

// 4. reduce -> gives you a single output and accpets cb, acc
let sum = arr.reduce((acc, value) => acc += value, acc = 0);
console.log(sum);

// 5. slice -> start, end
let slicedValues = arr.slice(1, 4);
console.log(slicedValues);

// 6. splice -> delete the elements, startIdx, noOfElements, replaceWith
let splicedValues = arr.splice(1, 1, 3);
console.log(splicedValues);

// 7. some -> accepts a cb
let flag = arr.some(ele => ele > 5);
console.log(flag);

// 8. every -> accepts a cb
flag = arr.every(ele => ele > 1);
console.log(flag);

// 9. indexOf -> accepts the element
let index = arr.indexOf(3);
console.log(index);

// 8. sort -> sort the elements, accepts a cb
arr = [5, 4, 3, 2, 1];
let res = arr.sort((a, b) => a - b);
console.log(res);

// 9. find -> find an element based on a condition, accepts a cb
let element = arr.find(ele => ele > 2);
console.log(element);

// 10. concat -> to append another array
let arr1 = [1, 2, 3], arr3 = [4, 5, 6];
console.log(arr1.concat(arr3));