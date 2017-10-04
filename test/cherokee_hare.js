var cherokeeHare = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Cherokee Hare', function() {

    context('test', function() {
      it('Adding startingPopulate, birthRate, and numberOfWeeks', function() {
        var total = cherokeeHare(200, 0.1, 5);
        //expect is chai
        expect(total).to.equal(300);
      });
    });
})