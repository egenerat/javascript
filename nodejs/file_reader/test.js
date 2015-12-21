var assert = require('assert');

var utils = require('./utils');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
    	var line = './blabla/src/main/java/com/amadeus/jcp/business/blah/blah/blah/impl/MyClass.java';
    	var expectedResult = './blabla/src/main/java/com/amadeus/jcp/business/blah/blah/blah/impl/';
      assert.equal(utils.getFolder(line), expectedResult);
    });
  });
});