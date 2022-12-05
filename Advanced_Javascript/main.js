//----Scope
// let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
// outer(); 10 20 30

//----Closure
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
// const fn = outer();
// fn();
// fn();

//----Currying
function sum(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
// const currySum = curry(sum);
// console.log(currySum(7)(1)(2));

//----this: Implicit Binding

const person = {
  name: 'Julius',
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

// person.sayMyName();

//----this: Explicit Binding
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

// sayMyName.call(person);

//----this: New Binding
function Person(name) {
  // this ={}
  this.name = name;
}

// const p1 = new Person('Julius');
// const p2 = new Person('Mark');

// console.log(p1.name, p2.name);

//----this: Default Binding
globalThis.name = 'Paul';
// sayMyName();

//---- Order of preference

// New Binding
// Explicit Binding
// Implicit Binding
// Default Binding
