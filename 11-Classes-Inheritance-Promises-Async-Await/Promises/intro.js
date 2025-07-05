// Creation of a promise
const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        // resolve('Promise resolved after 2 seconds');
        reject('Promise resolved after 2 seconds');
        reject('Promise resolved after 2 seconds');
    }, 2000);
})

// Consuming the promise
p1.then((data) => {
    console.log("Inside then -> ", data);
}).catch((error) => {
    console.error('Inside catch -> ', error);
});