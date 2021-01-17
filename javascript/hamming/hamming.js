//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute =(strand1,strand2) => {
  if (strand1.length === 0 && strand2.length === 0) {
    return 0;
  }
    if(strand1.length === 0){
      throw new Error('left strand must not be empty')
    }
    if(strand2.length === 0){
      throw new Error('right strand must not be empty')
    }
    if(strand1.length !== strand2.length){
      throw new Error('left and right strands must be of equal length')
    }
      let strand1Array = Array.from(strand1);
 
      let strand2Array = Array.from(strand2);
      let diff = 0
      for(let letter in strand1Array){
        if(strand1Array[letter] !== strand2Array[letter])
          diff += 1
      }
    return diff
 
};
