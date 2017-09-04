'use strict';

const p = new Promise ( (resolve, reject) => {
	const returnValue = 123;
	setTimeout( function() {
		resolve(returnValue);
		// reject("failure reason");
	}, Math.random() * 1000);
});


// wrapped in a function to pass a parameter and to prevent the promise to be started straightaway
const asyncFunction = function(parameter) {
	return new Promise ( (resolve, reject) => {
		setTimeout( function() {
			if (parameter > 10) {
				resolve(returnValue);
			}
			else {
				reject("Please enter a value greater than 10");	
			}
		}, Math.random() * 1000);
	});
}


p.then( function (value) {
	console.log(value);
})
.catch( function (error) {
	console.log(`Error: ${error}`);
});


const p1 = Promise.resolve(3);
const p2 = 1337;
var p3 = new Promise( (resolve, reject) => {
	setTimeout(resolve, 500, 'foo');
})

Promise.all([p1, p2, p3]).then( values => {
	console.log(values);
});