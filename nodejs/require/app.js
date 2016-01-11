var tools = require('./tools');
console.log(typeof tools.visible); // => 'function'
console.log(typeof tools.notVisible); // => undefined

var tools2 = require('./subfolder/tools2');
tools2.hello();