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

// First promise that is resolved
// AggregateError if all promises are rejected
Promise.any([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})