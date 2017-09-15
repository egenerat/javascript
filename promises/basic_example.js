// Simple example

let p = new Promise((resolve, reject) => {
    resolve(1);
})

p.then(val => console.log(val));


// In order to pass a parameter to a Promise, use a wrapping function
var wrappingFunction = function(size) {
  return new Promise(function(resolve, reject) {
    if (size > 10) {
      resolve("OK!");
    } else {
      reject(Error("ko..."));
    }
  });
}

wrappingFunction(10)
	.then(val => console.log(val))
	.catch(err => console.log(err))
	.then(console.log("Continues after the catch"));

wrappingFunction(11)
	.then(val => console.log(val))
	.catch(err => console.log(err))
	.then(console.log("Continues after the catch"));