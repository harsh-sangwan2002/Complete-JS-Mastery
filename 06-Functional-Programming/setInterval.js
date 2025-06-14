console.log("Before");

let counter = 0;
let timerId = setInterval(() => {

    if (counter == 5) {
        clearInterval(timerId);
        return;
    }

    console.log("Running after every second");
    counter++;
}, 1000)

console.log("After");