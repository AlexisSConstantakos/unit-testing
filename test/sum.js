var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('Testing the sum', function() {
    context('given the values 23 and 23', function() {
    it('returns 46, function() {
        var sumTest = sum(23,23);
        expect(sumTest).to.equal(46);
    });

});
});