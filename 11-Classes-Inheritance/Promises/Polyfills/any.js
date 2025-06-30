const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Get up in the morning');
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Go to gym');
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 is rejected');
    }, 1000);
})

Promise.myAny = function (promises) {

    return new Promise((resolve, reject) => {

        let promisesCount = 0, errors = [];

        promises.forEach(promise => {

            promise.then(val => {
                resolve(val);
            }).catch(err => {

                promisesCount++;
                errors.push(err);
                if (promisesCount === promises.length)
                    reject(new AggregateError(errors, 'All promises were rejected'));
            })
        })
    })
}
// First promise that is resolved
// AggregateError if all promises are rejected
Promise.myAny([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})