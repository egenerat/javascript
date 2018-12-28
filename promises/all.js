let p1 = new Promise(resolve => setTimeout(resolve, 2000, 'Promise 1'));
let p2 = new Promise(resolve => setTimeout(resolve, 1000, 'Promise 2'));
let p3 = new Promise(resolve => setTimeout(resolve, 4000, 'Promise 3'));
 
Promise.all([p1, p2, p3])
    .then(allDigitsTransformed => console.log(`All the promises resolved: ${allDigitsTransformed}`))
    .catch(err => console.error(err));

// More complex example
const digits = [1, 2, 3, 4];
const promises = digits.map(digit => Promise.resolve(digit)
    .then(val => Promise.resolve(`Hello ${val}`)));
Promise.all(promises)
  .then(allDigitsTransformed => console.log(allDigitsTransformed));