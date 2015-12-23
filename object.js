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
