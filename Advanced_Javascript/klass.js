class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  sayMyName() {
    return `My name is ${this.fName} ${this.lName}`;
  }
}

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log('Fighting crime');
  }
}

const batman = new SuperHero('Julius', 'Ngwu');
console.log(batman.sayMyName());
batman.fightCrime();
