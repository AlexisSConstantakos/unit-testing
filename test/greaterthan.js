var greaterthan = require('../greaterthan');
var chai = require('chai');
var expect = chai.expect;

describe('test for greater than', function() {
    context('given the values of 3 and 30', function() {
      it('returns true', function() {
        var result = greaterthan(3,30);
        expect(result).to.equal(true);
      });

  });
});

describe('test for greater than', function() {
    context('provided values of 30 and 3', function() {
      it('returns false', function() {
        var result = greaterthan(30,3);
        expect(result).to.equal(false);
      });

  });