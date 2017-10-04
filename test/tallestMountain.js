var tallestMountain = require('../tallestMountain');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Testing TallestMountain', function() {

    context('given mountain heights of [1, 2, 3]', function() {
      it('returns 3 as the tallest mountain', function() {
        var tallest = tallestMountain([1,2,3]);
        //expect is chai
        expect(tallest).to.equal(3);
      });
    });
})