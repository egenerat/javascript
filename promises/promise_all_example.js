let digits = [1, 2, 3, 4];
Promise.all(digits.map(digit => Promise.resolve(digit*10)
  .then(val => Promise.resolve(`Hello ${val}`))))
.then(allDigitsTransformed => console.log(allDigitsTransformed))
.catch(err => console.error(err));