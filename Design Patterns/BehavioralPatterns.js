//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// Command Pattern

function Car(name, make, year) {
  this.name = name;
  this.make = make;
  this.year = year;

  this.allArgs = function () {
    console.log(`Name: ${this.name}, Make: ${this.make}, Year: ${this.year}`);
  };
};

const car1 = new Car("Adder", "Aston Martin", "1945");

console.log(car1);