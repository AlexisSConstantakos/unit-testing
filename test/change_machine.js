var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Testing change machine', function() {

    context('return [2, 0, 1, 2]', function() {
      it('return [1, 2, 3]', function() {
        var change = changeMachine(47);
        //expect is chai
        expect(change).to.eql([2, 0, 1, 2]);
      });
    });
})