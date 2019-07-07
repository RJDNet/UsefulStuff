///////////////////////////////////// Function that constructs an Object
function PeepFac(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;

  // Will be on constructed object, not prototype
  this.fun = () => {
    console.log("This func method works");
  }
};

// or
// const PeepFac = function (name, age, country) {
//   this.name = name;
//   this.age = age;
//   this.country = country;
// };

// Adds method to prototype, referenced by every instance
PeepFac.prototype.printPerson = function () {
  console.log(this.name + ', ' + this.age + ', ' + this.country);
};

const person2 = new PeepFac('John', '60', 'Africa');
console.log(person2);
person2.printPerson();




///////////////////////////////////// Normal Object
const Obj = {
  var1: '1',
  var2: '2',
  var3: 3
}

console.log(Obj);













// Extra stuff
function PeepFac(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;

  this.fun = function () {
    console.log("This func method works");
  };
};

class PeepFac2 {
  constructor() {

  }

  fun() {
    console.log("fun func")
  };
};

// const funcer = new PeepFac("Ryan", "53", "USA");
// console.log(funcer);
// funcer.fun();

const fac = function (tester) {
  this.tester = tester;
};

class PeepFac3 {

};

const newer = new PeepFac();
// console.log(newer);
// newer.fun();





var newObject1 = {};

// or
var newObject2 = Object.create(Object.prototype);

// or
var newObject3 = new Object();

// console.log(newObject1);
// console.log(newObject2);
// console.log(newObject3);