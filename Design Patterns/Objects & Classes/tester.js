// Class

// PS. Chaining methods. Can chain methods by returning "this".
class TestClass {
  constructor(stringer) {
    this.test1string = stringer;
    // This will be a property on the object when constructed
    this.constructorFunction = () => {
      console.log("Constructor function works!")
    }
  }

  // These are on the prototype
  tester1() {
    console.log(`Class + ${this.test1string}`);
  }

  chain() {
    console.log("Chain Link");
    return this;
  }
};

// Constructor function
function Tester4(arg) {
  this.arg = arg;
  this.login = () => {
    console.log(arg);
  }
}

Tester4.prototype.protoFunc = function () {
  console.log("Proto Func!");
};

// Object
const TestObj = {
  test1string: "Object Variable",
  test2string: "This can access keys",
  testerObj1: function () {
    console.log(this.test2string);
  },
  testerObj2: () => {
    console.log("This can't access keys");
  },
  testerObj3() {
    //console.log("This can't access keys");
  }
};

const tobj = {
  test() {

  },
  test2() {

  }
}

// function
const tester3 = () => {
  console.log("Function Worked");
};



// Run

// Class, syntactic sugar over JS prototypal inheritance
console.log(new TestClass("Testing the constructor argument"))
const instantiate = new TestClass("Argument");
instantiate.constructorFunction();
instantiate.tester1();
instantiate.chain();
instantiate.chain();
instantiate.chain();

console.log("-------------------------");

// Object
console.log(TestObj);
console.log(TestObj.test1string);
TestObj.testerObj1();
TestObj.testerObj2();

console.log("-------------------------");

// Function
tester3();

console.log("-------------------------");

// Function like Class
console.log(Tester4);
const funcInitiate = new Tester4("Argument");
funcInitiate.login();
