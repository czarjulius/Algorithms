function plusMinus(arr) {
    let positiveNumber = 0
    let negativeNumber = 0
    let zero = 0
    for (let i of arr ){
        if(i > 0){
           positiveNumber += 1 
        }else if(i < 0){
            negativeNumber += 1
        }else{
            zero +=1
        }
    }
  printDivideAndDecimalSix(positiveNumber,arr.length)
  printDivideAndDecimalSix(negativeNumber,arr.length)
  printDivideAndDecimalSix(zero,arr.length)
}

const printDivideAndDecimalSix = (num,arrayNumber)=>{
  return console.log((num/arrayNumber).toFixed(6))
}