let p1 = new Promise(resolve => setTimeout(resolve, 2000, 'Promise 1'));
let p2 = new Promise(resolve => setTimeout(resolve, 1000, 'Promise 2'));
let p3 = new Promise(resolve => setTimeout(resolve, 4000, 'Promise 3'));
 
Promise.race([p1, p2, p3])
    .then(val => console.log(`The first promise to complete is ${val}`))
    .catch(err => console.log(`There was an issue: ${err}`));
// Waits until all the promises are resolved
