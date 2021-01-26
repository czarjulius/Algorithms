const naiveStringSearch = (longString, pattern)=>{
    let count = 0
    for(let i=0; i< longString.length; i++){
      for(let j=0; j<pattern.length; j++){
        if(pattern[j] !== longString[i+j]) break;
        if(j === pattern.length-1)count++
      }
    }
    
      return  count
  }
//   naiveStringSearch('This is a very long string','is')