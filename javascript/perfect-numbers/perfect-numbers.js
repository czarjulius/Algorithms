//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if(number <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }
  return checkScheme(number)

};
const sumOfFactors = (number) => {
let result = 0
for (let i = 0; i < number; i++) {
  if (number%i === 0) {
    result += i
  }
}
  return result
}

const checkScheme = (number) => {

  if (sumOfFactors(number) == number) {
    return 'perfect'
  }
  if (sumOfFactors(number) > number) {
    return 'abundant'
  }
  if (sumOfFactors(number) < number) {
    return 'deficient'
  }

};