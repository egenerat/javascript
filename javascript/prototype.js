function Person(age) {
    this.age = age;
}

Person.prototype.isMajor = function () {
    var age = this.age;
    return age > 18;
};

var alice = new Person(16);
var bob = new Person(19);
console.log('Is Alice major? ' + alice.isMajor());
console.log('Is Bob major? ' + bob.isMajor());
