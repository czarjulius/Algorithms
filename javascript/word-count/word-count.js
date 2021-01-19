//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  let result = {}
  let phraseArray = phrase.toLowerCase().match(/\w+(\'\w)?/g)
  for(let i in phraseArray){
    if(phraseArray[i].length > 0){
      let hasItem = result.hasOwnProperty(phraseArray[i])
    if(hasItem){
      result[phraseArray[i]] += 1;
    } else {
       result[phraseArray[i]] = 1
    }
    }
  }
  return result

};
