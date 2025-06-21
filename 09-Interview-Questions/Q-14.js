function counter(a) {

    let count = 1;
    if (a == 0)
        return count;

    return function inner(b) {

        count++;

        if (b == 0)
            return count;

        else
            return inner;
    }
}

console.log(counter(0)); // 1
console.log(counter()(0)); // 2
console.log(counter()()(0)); // 3
console.log(counter()()()(0)); // 4