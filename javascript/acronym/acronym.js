//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const makeAcronym = phrase.toUpperCase().split(/[-_" "]/)
  let result = ''
  for(let i in makeAcronym){
    if (makeAcronym[i][0] !== undefined) {
      
      result += makeAcronym[i][0]
    }
  }
  return result
};
