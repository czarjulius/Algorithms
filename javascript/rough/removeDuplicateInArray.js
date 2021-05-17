var arr = ["apple", "bannana", "orange", "apple", "orange"];

const result = arr.filter((item, index, inputArr)=>{
  return inputArr.indexOf(item)===index
})
