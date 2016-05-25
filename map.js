var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

var roots2 = numbers.map(function(number) {
  return Math.sqrt(number);
});
console.log(numbers);
console.log(roots);
console.log(roots2);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]



// Second part, with data structure inside the array
var objects = [{
    id: 1,
    value: "winter"
  }, {
    id: 2,
    value: "summer"
  }
];

var roots = objects.map(function(obj) {
  console.log("<id: "+obj.id+"> " + obj.value);
});
