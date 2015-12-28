var a = {simple: 'parent property'};

var b = Object.create(a);
b.second = 'child property';

console.log(b); // { second: 'child property' }
console.log(b.simple); // parent property (simple property is accessible even if not visible with a simple print)

console.log('iterate over properties:');
for(var i in b) {
	console.log(i + ', hasOwnProperty: ' + b.hasOwnProperty(i));
}


console.log('____________________');


var Mammal = function (name) {
	this.name = name;
};

var correctObject = new Mammal('dog');

console.log(correctObject.name);

console.log(this.name);

// /!\ new is missing
var incorrectObject = Mammal('dog');

//console.log(incorrectObject.name);
// TypeError: Cannot read property 'name' of undefined

console.log(this.name);