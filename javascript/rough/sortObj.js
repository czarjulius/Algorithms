const persons = [
  {id:1, name:'mike', age:1992},
  {id:2, name:'dike', age:1883},
  {id:3, name:'ketty', age:1967},
  {id:4, name:'zuby', age:2001},
  {id:5, name:'cam', age:1744},
  {id:6, name:'helen', age:2021},
]
const result = persons.sort((a,b)=>(a.age > b.age) ? 1 :  -1 )
// consolelog(result)

const cars = [
  {id:1, name:'camry', country:'US'},
  {id:2, name:'Benz', country:'GM'},
  {id:3, name:'Toyota', country:'JP'},
  {id:4, name:'Ford', country:'US'},
  {id:5, name:'Honda', country:'JP'},
  {id:6, name:'Suzuki', country:'JP'},
  {id:7, name:'Peugeot', country:'FR'},
]
const sortData = (cars)=>{
  const output = {}
for(const {id, name, country} of cars){
  if(!output[country]) output[country] = [];
  output[country].push({id, name, country})
}
  return Object.keys(output).sort().reduce((acc, currValue)=> (acc[currValue] = output[currValue], acc), {})
}
// console.log(sortData(cars))