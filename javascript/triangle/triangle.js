//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2]  }

  isTriangle() {
    var sumTwoEqual = (this.a + this.b >= this.c &&
      this.a + this.c >= this.b &&
      this.b + this.c >= this.a);
    var diZero = !(this.a <= 0 || this.b <= 0 || this.c <= 0);
    return (sumTwoEqual && diZero) ? true : false
  }

  get isEquilateral() {
    if (this.isTriangle()) {
      return (this.a === this.b && this.a === this.c) ? true : false
    } else return false
  }

  get isIsosceles() {
    if (this.isTriangle()) {
      return (this.a === this.b || this.a === this.c || this.b === this.c) ? true : false
    } else return false;
  }

  get isScalene() {
    if (this.isTriangle()) {
      return (this.isEquilateral || this.isIsosceles) ? false : true;
    }
    else return false;
  }
}
