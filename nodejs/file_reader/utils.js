module.exports = {
  parseResults: function(data) {
    data = data.replace(' ', '');
	var lines = data.split('\n');
	console.log(lines.length);
  },
       
  getFolder: function(line) {
    var splitLine = line.split('/');
    return splitLine.slice(0, splitLine.length-1).join('/') + '/';
  },
};