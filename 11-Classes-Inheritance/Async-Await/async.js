// Creation of a promise
const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise1 resolved after 2 seconds');
        // reject('Promise rejected after 2 seconds');
        // reject('Promise resolved after 2 seconds');
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Promise2 resolved after 1 second');
    }, 1000);
});

console.log("Before");

// Consuming the promise
async function consumePromise() {
    try {

        const res2 = await p2;
        console.log(res2);

        const res1 = await p1;
        console.log(res1);

        return 2;
    } catch (err) {
        console.log(err);
    }
}
consumePromise();

console.log("After");