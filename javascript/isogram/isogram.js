//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  let inputArray = input.toLowerCase().replace(/[-" "]/,"").split('')
  return inputArray.every((e, i, a) => a.indexOf(e) === i)
};
