function compareTriplets(a, b) {
  let aCount = 0
  let bCount = 0
for(let i in a){
    if(a[i]>b[i]){
      aCount += 1
    }
  if(a[i]<b[i]){
      bCount += 1
    }
}
return [aCount,bCount]
}