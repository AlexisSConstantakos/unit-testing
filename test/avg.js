var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('testing averages', function() {
    context('provided values of 23 and 3 and 12', function() {
      it('returns 13', function() {
        var avgTest = avg(23,3, 12);
        expect(avgTest).to.equal(13;
      });

  });
});