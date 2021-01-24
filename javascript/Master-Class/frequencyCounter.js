const same = (arr1,arr2) => {
    let frequencyCount1 = {}
    let frequencyCount2 = {}
    for(let i of arr1){
      frequencyCount1[i] = ++frequencyCount1[i] || 1
    }
    for(let i of arr2){
      frequencyCount2[i] = ++frequencyCount2[i] || 1
    }
    for(let key in frequencyCount1){
      if(!(key**2 in frequencyCount2)){
        return false
      }
      if(frequencyCount2[key**2] !== frequencyCount1[key]){
        return false
      }
    }
    return true
  };