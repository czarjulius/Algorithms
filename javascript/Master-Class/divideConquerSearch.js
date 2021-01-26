const divideConquerSearch = (arr,val) => {
    let min = 0
    let max = arr.length - 1
    while(min <= max){
      let middle = Math.floor((min + max)/2)
      let currentEllement = arr[middle]
      
      if(currentEllement < val){
        min = middle + 1
      }else if(currentEllement > val){
        max = middle -1
      }else{
        return middle
      }
    }
    
    return -1

}
// divideConquerSearch([1,3,5,6,7,8,23,45,67,89,90],23)