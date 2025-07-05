const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Get up in the morning');
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Go to gym');
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Eat Breakfast');
    }, 1000);
})

Promise.myRace = function (promises) {

    return new Promise((resolve, reject) => {

        promises.forEach(promise => {

            promise.then(resolve).catch(reject);
        })
    })
}

// Resolves/rejects the first promise that settles/fulfills
Promise.myRace([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})