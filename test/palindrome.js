var checkPalindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Check palindrome', function() {

    context('test of palindrome', function() {
      it('checking word', function() {
        var palindrome = checkPalindrome("seattle");
        //expect is chai
        expect(palindrome).to.equal(false);
      });
    });
})

// describe('Check palindrome', function() {
    
//     context('test of palindrome', function() {
//         it('checking word', function() {
//         var palindrome = checkPalindrome("seattle");
//         //expect is chai
//         expect(palindrome).to.equal(true);
//         });
//     });
// })