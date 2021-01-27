function birthdayCakeCandles(candles) {
    let arr = candles.sort((a,b)=> {return b-a}),max = arr[0],count = 0
    for (let i in arr){
      if(arr[i] === max) count++
    }
    return count
      // Write your code here
  
  }
//   birthdayCakeCandles([4,4,1,4,3])