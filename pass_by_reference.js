//Javascript always passes by value. However, if you pass an object to a function, the "value" is really a reference to that object, so the function can modify that object's properties but not cause the variable outside the function to point to some other objec

var myFunction = function(passByValue) {
	passByValue = {
		newKey: "new value"
	};
	console.log(passByValue);
};

var anObject = {};
myFunction(anObject);

console.log(anObject);