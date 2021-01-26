const recursiveFactorial = (num) => {
    if(num === 1){ return 1}
    return num * recursiveFactorial(num -1 )
  }
  recursiveFactorial(5)