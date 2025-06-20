function sum() {

    if (arguments.length == 1)
        return arguments[0];

    else
        return arguments[0] + arguments[1];
}

let res = sum(1);
console.log(res); // 1

res = sum(1, 2);
console.log(res); // 3