//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(inputValue) {
    this.inputValue = inputValue
  }

   get sumOfSquares() {
    let sumUp = 0
    for(let i=0; i<this.inputValue+1; i++){
      sumUp += (i**2)
    }
    return sumUp
  }

   get squareOfSum() {
    let sumUp = 0
    for(let i=0; i<this.inputValue+1; i++){
      
      sumUp += i
    }
    return sumUp**2
   }

   get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
