for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}

const fibonacciSeries = (num)=>{
  if(num <=1) return 1;
  
  return fibonacciSeries(num -1) + fibonacciSeries(num - 2)
}

fibonacciSeries(10)

function FibonacciChecker(num) { 
  if(isSquare(5*(num*num) - 4) || isSquare(5*(num*num) +4)){
    return 'yes'
  }else{
    return 'no'
  }

}

function isSquare(input){
  return input > 0 && Math.sqrt(input) % 1 === 0;
}
   
// keep this function call here 
console.log(FibonacciChecker(readline()));

function ArrayJumping(arr) { 

if(arr.length <= 1) return 0;
let newArr = new Array(arr.length)
newArr[0] = 0
for(let i = 1; i<arr.length; i++){
  newArr[i] = Number.MAX_SAFE_INTEGER;
  for(let j = 0; j<i; j++){
    if(arr[j] + j >= i){
      newArr[i] = Math.min(newArr[j]+1, newArr[i]);
      break;
    }
  }
}


  // code goes here  
  return newArr[arr.length - 1]; 

}
   
// keep this function call here 
console.log(ArrayJumping(readline()));



function ParallelSums(arr) { 
  let sum = 0

  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }

  if(sum%2 !== 0){
    return -1
  }
  const val =  ParallelSumsRecursive(arr, sum/2, 0);
  console.log(val) 

  // code goes here  
  // return ParallelSumsRecursive(arr, sum/2, 0); 

}

function ParallelSumsRecursive(num, sum, currentIndex){
  // console.log(num[currentIndex], sum-num[currentIndex])
  if(sum === 0) {
      console.log(num[currentIndex]) 
    return num[currentIndex]
  }
  if(num.length === 0 || currentIndex >= num.length) return -1;

  if(num[currentIndex] <= sum){
    if(ParallelSumsRecursive(num, sum-num[currentIndex], currentIndex +1)) {
            console.log(num[currentIndex], 'sum') 
      return sum-num[currentIndex]
    }
  }
              console.log(num[currentIndex], 'sum') 

  return ParallelSumsRecursive(num, sum, currentIndex +1)
}
   ParallelSums([1,2,3,4])
// keep this function call here 
