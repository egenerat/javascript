function Car() {
  this._mileage = 0;
}

Car.prototype.drive = function(miles) {
  if (typeof miles == 'number' && miles > 0) {
    this._mileage += miles;
  } else {
    throw new Error('drive only accepts positive numbers');
  }
};

Car.prototype.readMileage = function() {
  return this._mileage;
};

var aCar = new Car();

console.log(aCar._mileage); // 0
console.log(aCar.readMileage()); // 0, same result as previously (access via getter)
aCar.drive(1);

console.log(aCar._mileage); // 1

aCar._mileage = 'pwned';

console.log(aCar._mileage); // prints pwned, which is a problem

// Raises an error
//a.drive(-1);