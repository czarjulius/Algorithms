//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series === "") throw new Error('series cannot be empty');
    this.series = series;
  }

  slices(sliceLength) {
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (this.series.length < sliceLength) throw new Error('slice length cannot be greater than series length');
    let result = []
    for(let i = 0; i<=this.series.length - sliceLength; i++){
      result.push(this.series.slice(i, sliceLength + i).split('').map(num => parseInt(num)))
    }
    return result;
  }
}
