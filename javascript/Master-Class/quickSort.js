function pivotHelper(arr,start=0,end=arr.length-1) {
    const swap = (arr,idx1,idx2)=>{
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let pivot = arr[start]
    let swapIdx= start
    for(let i= start + 1; i<arr.length; i++){
      if(pivot > arr[i]){
        swapIdx +=1
        swap(arr, swapIdx, i)
      }
    }
    swap(arr,start,swapIdx)
    return swapIdx;
  }
  const quickSort = (arr, left=0, right=arr.length-1)=>{
    if(left < right)  {
      let pivotIdx = pivotHelper(arr, left, right)
      quickSort(arr, left, pivotIdx-1)
      quickSort(arr, pivotIdx+1, right)
    }
    return arr
  }
//   quickSort([9,4,8,2,1,5,7,6,3])