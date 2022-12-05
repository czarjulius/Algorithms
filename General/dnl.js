// const convertToString = (arr)=> '' + arr.map(JSON.stringify).sort()
// const sortedArray = convertToString([6,3,1,7,3,2,5]).split(',')
// console.log([...new Set(sortedArray)])

// const removeDup = (arr) =>{
//   const output = [];

//   arr.forEach((item)=>{
//     if(output.indexOf(item) < 0){
//       output.push(item)
//     }
//   })
//   return output
// }

// console.log(removeDup([4,5,3,1,2,3,5,6,7]))
// const arr = [1, 2, 2, 2, 2];

// const sum = arr.reduce((acc, item)=> acc+item, 0)
// console.log(sum)

// let frq = {}
// for (let i of arr) {
//   frq[i] = ++frq[i] || 1;

// }
// var cars = [{'make':'audi','model':'r8','year':'2012'},{'make':'audi','model':'rs5','year':'2013'},{'make':'ford','model':'mustang','year':'2012'},{'make':'ford','model':'fusion','year':'2015'},{'make':'kia','model':'optima','year':'2012'},
//             {'make':'kia','model':'optima','year':'2033'},
//             {'make':null,'model':'zen','year':'2012'},
//             {'make':null,'model':'blue','year':'2017'},

//            ];

// const result = cars.reduce((r, a)=> {
//         key = a.make || 'others';
//         r[key] = r[key] || [];
//         r[key].push(a);
//         return r;
//     }, {});
// const a1 = [2, 4, 6];
// const a2 = [6, 4, 2];
// const r = JSON.stringify(a1) === JSON.stringify(a2);

// console.log(r);
