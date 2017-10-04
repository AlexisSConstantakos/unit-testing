//code the way we are used to seeing it
class Person {
    // dob;
    constructor(dob){
        this.dob = new Date(dob)
    }
    age(){
        var ageDiff = new Date(Date.now() - this.dob);
        return Math.abs(ageDiff.getUTCFullYear() - 1970); 
    }
    whatCanIDo(){
        var what = [];
    
        var age = this.age();
    
        if (age >= 18) {
        what.push('vote');
        what.push('legally enter contracts');
        }

        if (age >= 21) {
            what.push('purchase and consume alcohol');
        }

        if (age >= 25) {
            what.push('you may serve as a representative');
        }

        if (age >= 30) {
            what.push('you may serve as a senator');
        }

        if (age >= 35) {
            what.push('you may serve as president');
        }
    
         return what;
    };
}

// // different way to write it
// function Person(dob) {
//     this.dob = new Date(dob);
//   }
  
//   Person.prototype.age = function() {
//     var ageDiff = new Date(Date.now() - this.dob);
//     return Math.abs(ageDiff.getUTCFullYear() - 1970);
//   };
  
  module.exports = Person;