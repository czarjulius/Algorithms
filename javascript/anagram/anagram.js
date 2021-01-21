//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word,wordArray) => {
  let result = []
  for(let string in wordArray){
    if(word.toLowerCase() === wordArray[string].toLowerCase()){ continue; }
    if (sortWord(word) === sortWord(wordArray[string])) {
      result.push(wordArray[string])
    }

  }
  return result

};

const sortWord = (word)=>{
  return word.toLowerCase().split('').sort().join('');
}