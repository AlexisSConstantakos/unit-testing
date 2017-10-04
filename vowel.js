(function(){

    function containsVowel(word) { 
        return word.match('a|e|i|o|u|i') ? true : false; }
        module.exports = containsVowel;

})()