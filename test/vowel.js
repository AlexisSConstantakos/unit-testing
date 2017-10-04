var containsVowel = require('../vowel');
var chai = require('chai');
var expect = chai.expect;
describe('Test if word contains a vowel', function() { 
    
  context('Contains Vowel', function() { 
      it('returns true because word contsins a value', function() {
        var result = containsVowel("noise")
        expect(result).to.equal(true);
        
      });
    });
});