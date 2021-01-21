//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input
  }

  get latest() {
    return this.input[this.input.length - 1]
  }

  get personalBest() {
    let sortedScore =  this.input.sort((a,b)=>{return a-b})
    return sortedScore[sortedScore.length - 1]
  }

  get personalTopThree() {
    let sortedScore =  this.input.sort((a,b)=>{return a-b}).reverse()
    return sortedScore.slice(0, 3);
  }
}
