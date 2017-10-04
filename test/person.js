var Person = require('../person');
var chai = require('chai');
var expect = chai.expect;


//describe sections are for display purposes
describe('Person', function() {
  describe('#age()', function() {
    context('when dob is 10/20/1992', function() {
      it('returns 24 for persons age', function() {
        var person = new Person('10/20/1992');
        var age = person.age();
        //expect is chai
        expect(age).to.equal(24);
      });
    });

    context('when dob is 09/03/1986', function() {
      it('returns 31 for persons age', function() {
        var person = new Person('09/03/1986');
        var age = person.age();
        expect(age).to.equal(31);
      });     
    });

    context('when dob is 09/30/1981', function() {
      it('returns 35 for persons age', function() {
        var person = new Person('09/30/1981');
        var age = person.age();
        expect(age).to.equal(35);
      });
    });
    //18
    context('you may vote legally when your dob is 09/03/1999', function() {
      it('returns 18 for persons age', function() {
        var person = new Person('09/03/1999');
        var age = person.age();
        expect(age).to.equal(18);
      });
    });
    //21
    context('you may vote legally when your dob is 09/03/1996', function() {
      it('returns 21 for persons age', function() {
        var person = new Person('09/03/1996');
        var age = person.age();
        expect(age).to.equal(21);
      });
    });
    //25
    context('you may serve as a representative when your dob is 09/03/1992', function() {
      it('returns 25 for persons age', function() {
        var person = new Person('09/03/1992');
        var age = person.age();
        expect(age).to.equal(25);
      });
    });
    //30
    context('you may serve as a senator when your dob is 09/03/1987', function() {
      it('returns 30 for persons age', function() {
        var person = new Person('09/03/1987');
        var age = person.age();
        expect(age).to.equal(30);
      });
    });
    //35
    context('you may serve as president when your dob is 09/03/1982', function() {
      it('returns 35 for persons age', function() {
        var person = new Person('09/03/1982');
        var age = person.age();
        expect(age).to.equal(35);
      });
    });
  });
  //18
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 18 or more', function() {
      it('returns vote', function() {
        var person = new Person('1/1/1999');
        var what = person.whatCanIDo();
        expect(what).to.include('vote');
      });
    });
  });
  //18
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 18 or more', function() {
      it('returns vote', function() {
        var person = new Person('1/1/1999');
        var what = person.whatCanIDo();
        expect(what).to.include('vote' && 'legally enter contracts');
      });
    });
  });
  //21
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 21 or more', function() {
      it('returns drinking age', function() {
        var person = new Person('1/1/1996');
        var what = person.whatCanIDo();
        expect(what).to.include('purchase and consume alcohol');
      });
    });
  });
  //25
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 25 or more', function() {
      it('returns age of eligible representative', function() {
        var person = new Person('1/1/1992');
        var what = person.whatCanIDo();
        expect(what).to.include('you may serve as a representative');
      });
    });
  });
  //30
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 30 or more', function() {
      it('returns age of eligible senator', function() {
        var person = new Person('1/1/1987');
        var what = person.whatCanIDo();
        expect(what).to.include('you may serve as a senator');
      });
    });
  });
  describe('testing Person.whatCanIDo()', function() {
    context('when age is 35 or more', function() {
      it('returns age of eligible president', function() {
        var person = new Person('1/1/1982');
        var what = person.whatCanIDo();
        expect(what).to.include('you may serve as president');
      });
    });
  });
});

