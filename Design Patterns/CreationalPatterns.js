// Useful Object Example
const TestObj = {
  test1string: "Object Variable",
  test2string: "This can access keys",
  testerObj1: function () {
    console.log(this.test2string);
  },
  testerObj3() {
    console.log(this.test2string);
  },
  testerObj2: () => {
    console.log("This can't access keys");
  }
};

// console.log(TestObj);
// TestObj.testerObj3();

// Arrow function can't be done normally, react for example uses "class fields" with babel under the hood to allow arrow function

// class Funct {
//   constructor() {

//   }
//   tester2 = () => {
//     console.log("Testing");
//   };
// };

// const funcer = new Funct();
// console.log(funcer);
// funcer.tester();












//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Factory Pattern
const peopleFactory = (name, age, country) => {

  const temp = {};
  // Same as *const temp = new Object;*

  temp.name = name;
  temp.age = age;
  temp.country = country;

  temp.printPerson = function () {
    console.log(this.name + ', ' + this.age + ', ' + this.country);
  };

  return temp;
};

const person1 = peopleFactory('Russ', '32', 'UK');
// console.log(person1);
// person1.printPerson();

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Constructor Pattern
const PeopleConstructor = function (name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;

  this.printPerson = function () {
    console.log(this.name + ', ' + this.age + ', ' + this.country);
  };
};

const person2 = new PeopleConstructor('Russ', '32', 'UK');
const person3 = new PeopleConstructor('John', '24', 'Africa');
// console.log(person2);
// console.log(person3);
// person2.printPerson();
// person3.printPerson();

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Prototype Pattern
const PeopleProto = function () { };

PeopleProto.prototype.name = 'No Name';
PeopleProto.prototype.age = 0;
PeopleProto.prototype.country = 'No Country';
PeopleProto.prototype.printPerson = function () {
  console.log(this.name + ', ' + this.age + ', ' + this.country);
};

// Default properties are on the prototype
const peepInstance = new PeopleProto();
// console.log(peepInstance);
// peepInstance.printPerson();

// Inherits prototype and has own properties
peepInstance.name = "Russ";
peepInstance.age = "22";
peepInstance.country = PeopleProto.prototype.country;
// console.log(peepInstance);
// peepInstance.printPerson();

// Will alter the prototype for all object instances because they reference the same base object
PeopleProto.prototype.name = 'John';

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Dynamic Prototype Pattern
const PeopleDProto = function (name, age, country) {
  this.age = age;
  this.name = name;
  this.country = country;

  if (typeof this.printPerson !== 'function') {
    PeopleDProto.prototype.printPerson = function () {
      console.log(this.name + ', ' + this.age + ', ' + this.country);
    };
  }
};

const peepDInstance = new PeopleDProto('John', '24', 'Africa');
// console.log(peepDInstance);
// peepDInstance.printPerson();
const peepDInstance2 = new PeopleDProto('Clive', '44', 'China');
// console.log(peepDInstance2);
// peepDInstance2.printPerson();