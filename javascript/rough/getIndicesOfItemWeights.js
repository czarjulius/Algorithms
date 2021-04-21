function getIndicesOfItemWeights(arr, limit) {
  const output = {}
  // iterate through arr with variable i
  for(let i = 0; i< arr.length; i++){
    // check if arr[i] exists as a key in output
    if(arr[i] in output){
      return [i, output[arr[i]]]
    }else{ 
      output[limit - arr[i]] = i
    } 
  }
    
  return []
  
}

// // i + j = k
// // i = k - j
// console.log(getIndicesOfItemWeights([3, 4, 2, 6, 8], 12))