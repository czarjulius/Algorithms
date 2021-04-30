const binarySearch = (arr, val)=>{
    let left = 0
    let right = arr.length-1
    while(left <= right){
      let middle = Math.floor((left + right)/2)
      const currentValue = arr[middle]
      if(currentValue < val){
        left = middle + 1
      }else if(currentValue > val){
        right = middle -1
      }
      else {
        return middle
      }
    }
      return  -1
  }
//   binarySearch([1,2,3,4,5,6,7,8,9],4)