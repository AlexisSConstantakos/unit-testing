var hangmanTest = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Testing hangman', function() {

    context('testing hangman', function() {
      it('letter a', function() {
        var word = hangmanTest("o");
        //expect is chai
        expect(word).to.eql("Nope, that letter doesn't exist in my word");
      });
    });
})

describe('Testing hangman', function() {
    
    context('testing hangman', function() {
      it('letter o', function() {
        var word = hangmanTest("t");
        //expect is chai
        expect(word).to.eql("Yeah, the letter t exists 2 times in my word");
        });
    });
})

describe('Testing hangman', function() {
  
  context('testing hangman', function() {
    it('letter o', function() {
      var word = hangmanTest("a");
      //expect is chai
      expect(word).to.eql("Yeah, the letter a exists 1 times in my word");
      });
  });
})

