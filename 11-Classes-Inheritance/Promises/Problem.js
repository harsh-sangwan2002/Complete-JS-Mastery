// 1. Get up in the morning -> 2s
// 2. Go to gym -> 1s
// 3. Eat breakfast -> 1s

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
        resolve('Eat breakfast');
    }, 3000);
})

p1.then(data => {
    console.log(data);
    return p2;
}).then(data => {
    console.log(data);
    return p3;
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})