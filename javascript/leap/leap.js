//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  if (year%4 === 0 && year%100 !==0 || year%400 ===0) {
    return true
  } else {
    
    return false
  }
};
