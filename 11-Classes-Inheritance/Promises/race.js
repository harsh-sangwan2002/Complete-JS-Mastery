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
    }, 1000);
})

// Resolves/rejects the first promise that settles/fulfills
Promise.race([p1, p2, p3]).then(val => {
    console.log(val);
}).catch(err => {
    console.log(err);
})