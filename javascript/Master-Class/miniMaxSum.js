function miniMaxSum(arr) {
    let newArr = arr.sort((a,b)=>{return a-b})
    let maxNum = 0
    let minNum = 0
    for (let i = 0; i<newArr.length -1; i++){
      minNum += newArr[i]
    }
    for (let j = 0; j<newArr.length; j++){
      maxNum += newArr[j]
    }
    maxNum = maxNum - newArr[0]
  
  return console.log(minNum,maxNum)
  }