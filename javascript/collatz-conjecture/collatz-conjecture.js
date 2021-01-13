//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (value) => {

  if (value <= 0) {
    throw Error('Only positive numbers are allowed')
  }
  let step = 0  
  while(value > 1){
    if (isEven(value)) {
      value = value / 2
    } else{
      value = (3 * value) + 1
    }
    step += 1
  }
  return step
};

const isEven = (value)=>{
return value%2 ===0
}