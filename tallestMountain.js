(function(){
    
      function tallestMountain(mountains){
        mountains.sort(function(a, b){return a - b});
        return mountains[mountains.length - 1];
      }
    
        module.exports = tallestMountain;
    
    
      // let mountains = ["10000", "5000", "2500", "15000"];
      // mountains.sort(function(a, b){return a-b});
      // // mountains[mountains.length -1];
      // console.log(mountains);
      // console.log(mountains[mountains.length -1]);
    })()