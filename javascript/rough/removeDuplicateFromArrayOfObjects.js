const cars = [
  {id:1, name:'camry', country:'US'},
  {id:2, name:'Benz', country:'GM'},
  {id:3, name:'Toyota', country:'JP'},
  {id:4, name:'Ford', country:'US'},
  {id:5, name:'Honda', country:'JP'},
  {id:6, name:'Suzuki', country:'JP'},
  {id:7, name:'Peugeot', country:'ZL'},
]

const distinct = []
cars.map(x=>distinct.filter(a=> a.name ===x.name && a.country === x.country).length > 0 ? null : distinct.push(x))
console.log(distinct);