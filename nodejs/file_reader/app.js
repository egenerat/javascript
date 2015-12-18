var utils = require('./utils');

fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  utils.parseResults(data);
});