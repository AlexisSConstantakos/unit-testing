(function(){
    
    function hangmanTest(letter) {
        let indices = [];
        let word = "seattle";
        let wordArray = word.split("");
        let idx = wordArray.indexOf(letter);
          while (idx != -1) {
            indices.push(letter);
            idx = wordArray.indexOf(letter, idx + 1);
          }
            if (word.indexOf(letter) > -1 ) {
                phrase="Yeah, the letter " + letter + " exists " + indices.length + " times in my word";
            } else {
                phrase="Nope, that letter doesn't exist in my word";
            }
    
          console.log(indices);
          console.log(indices.length);

          return phrase;
        }

        module.exports = hangmanTest;
})()

    // if (word.indexOf(letter) > -1 ) {
    //     console.log("Yeah, the letter " + letter + " exists " + indices.length + " times in my word");
    // } else {
    //     console.log("Nope, that letter doesn't exist in my word");
    // }


    //   var indices = [];
    //   var word = 'seattle';
    //   var letter = 't';
    
    //   wordArray = word.split("");
    //   console.log(wordArray);
    
    
    //   var idx = wordArray.indexOf(letter);
    //   while (idx != -1) {
    //     indices.push(idx);
    //     idx = wordArray.indexOf(letter, idx + 1);
    //   }
    
    //   if (word.indexOf(letter) > -1 ) {
    //       console.log("Yeah, the letter " + letter + " exists " + indices.length + " times in my word");
    //   } else {
    //       console.log("Nope, that letter doesn't exist in my word");
    //   }
    
      // var wordArray = word.split("")
      //
      // var matchArray = wordArray.filter(function(letter)){
      //   alert('Yeah, the letter x exists y times in my word');
    
