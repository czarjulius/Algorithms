//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!result[j]) result.push('');
      const spaces = i - result[j].length;
      result[j] += ' '.repeat(spaces);
      result[j] += arr[i].charAt(j);
    }    
  }
return result;

};
