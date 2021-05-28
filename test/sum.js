

const summary = (arrayInput) => {
  //TODO implement
  let total = 0
  for(let i = 0; i<arrayInput.length; i++){
    total += arrayInput[i]
  }
  return total
}
const result = summary([1,2,3,4,5]) // expected: 1+2+3+4+5
document.getElementById("app").innerHTML=`
${result}
`;

//take in array
// a variable called total
//loop through the array 
