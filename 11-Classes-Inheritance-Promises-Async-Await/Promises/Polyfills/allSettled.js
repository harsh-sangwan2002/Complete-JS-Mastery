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
        reject('Promise 3 is rejected');
    }, 3000);
})

Promise.myAllSettled = function (promises) {

    return new Promise((resolve, reject) => {

        let res = [], promisesCount = 0;

        promises.forEach((promise) => {

            promise.then(value => {
                res.push({
                    status: "fulfilled",
                    value: value
                })

                promisesCount++;
                if (promisesCount === promises.length)
                    resolve(res);
            }).catch(err => {
                res.push({
                    status: "rejected",
                    reason: err
                })
                promisesCount++;
                if (promisesCount === promises.length)
                    resolve(res);
            })
        })
    })
}

Promise.myAllSettled([p1, p2, p3]).then(val => {
    console.log("then -> ", val);
}).catch(err => {
    console.log("catch -> ", err);
})