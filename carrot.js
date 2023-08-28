// function maxXor(lo, hi, k) {
//   let max = 0;

//   for (let a = hi; a >= lo; a--) {
//     for (let b = hi; b >= a + 1; b--) {
//       const xor = a ^ b;
//       if (xor <= k) {
//         max = Math.max(max, xor);
//       }
//     }
//   }
//   return max;
// }

// function inventoryList() {
//   var items = [];

//   function add(item) {
//     if (item != null) {
//       const index = items.indexOf(item);
//       if (index === -1) {
//         items.push(item);
//       }
//     }
//   }
//   function remove(item) {
//     const index = items.indexOf(item);
//     if (index > -1) {
//       items.splice(index, 1);
//     }
//   }
//   function getList() {
//     if (items) {
//       return items;
//     } else {
//       return null;
//     }
//   }

//   return {
//     add: add,
//     getList: getList,
//     remove: remove,
//   };
// }
