//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  let result = ''
    if(input%3===0){
    result +='Pling'
  }
    if(input%5===0){
    result +='Plang'
  }
    if(input%7===0){
    result +='Plong'
  }
  
  return result || input.toString();
}