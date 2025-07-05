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
        resolve('Eat breakfast!');
        // reject('Promise 3 is rejected');
    }, 3000);
})

Promise.myAll = function (promises) {

    return new Promise((resolve, reject) => {

        let res = [], promisesCount = 0;

        promises.forEach(promise => {

            promise.then(val => {
                res.push(val);
                promisesCount++;

                if (promisesCount === promises.length) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
            })
        })
    })
}

// Resolved the promises if all are resolved
// If any promise is rejected, it will go to catch block
Promise.myAll([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})