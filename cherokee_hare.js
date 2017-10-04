(function () {
    
    function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) { 

        var total = ((startingPopulation*birthRate)*numberOfWeeks)+startingPopulation
        
        console.log("There will be " + startingPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks");

        return total;
    }
    module.exports = cherokeeHare;
})()