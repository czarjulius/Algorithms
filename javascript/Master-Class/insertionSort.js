function insertionSort(arr) { 
    for (let i=0; i<arr.length; i++){
      let currentValue = arr[i]
      let j
      for (j=i-1; j >= 0 && arr[j] > currentValue; j--){
        arr[j+1] = arr[j]
      }
      arr[j+1] = currentValue
    }
    return arr
  }
//   insertionSort([1,4,2,3,0,9])