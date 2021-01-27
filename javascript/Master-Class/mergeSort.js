function mergeTwoSortedArrays(arr1, arr2) { 
  let result = []
  let i = 0
  let j = 0
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    result.push(arr1[i])
      i++
  }
  while(j < arr2.length){
    result.push(arr2[j])
      j++
  }
  return result
}
const mergeSort = (arr)=>{
  if(arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length/2)
  let leftArr = mergeSort(arr.slice(0,midPoint))
  let rightArr = mergeSort(arr.slice(midPoint))
  return mergeTwoSortedArrays(leftArr, rightArr);
}

// mergeSort([2,67,78,89])