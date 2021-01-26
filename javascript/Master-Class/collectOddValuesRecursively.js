const collectOddValuesRecursively = (arr) => {
    let newArr = []
      if(arr.length === 0){ return newArr}
    if(arr[0]%2 !== 0){
      newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValuesRecursively(arr.slice(1)))
      return newArr
    }
    // collectOddValuesRecursively([1,2,3,4,5,7,8,9,23,6,32,53,25,71])