function method (parameter) {
	console.log('worker: ' + parameter);
}

setTimeout(function(){
	method(1);
}, 1000);
console.log("step 1");

setTimeout(function(){
	method(2);
}, 1000);
console.log("step 2");

setTimeout(function(){
	method(3);
}, 1000);
console.log("step 3");