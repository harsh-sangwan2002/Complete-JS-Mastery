function sum() {

    let cache = {};
    return function (args) {
        key = String(args);

        if (cache[key])
            return cache[key];

        cache[key] = args[0] + args[1];
        return cache[key];
    }
}

const arr = [1, 2];
const test = sum();
console.log(test(arr));
console.log(test(arr));
console.log(test(arr));