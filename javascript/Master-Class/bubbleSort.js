const bubbleSort = (arr)=>{
    let noSwap;
    const swap = (arr,idx1,idx2)=>{
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i=arr.length; i>0; i--){
      noSwap = true
      for(let j=0; j<i-1; j++){
        if(arr[j] > arr[j+1]){
          swap(arr,j,j+1)
          noSwap = false
        }
      }
      if(noSwap) break;
    }
    return arr
  }
  
//   bubbleSort([2,1,5,3,4])