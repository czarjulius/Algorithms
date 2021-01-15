//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let result = {}
  for(let point in old){
    old[point].forEach(letter =>{
      result[letter.toLowerCase()] = parseInt(point)
    })
  }
  return result
};
