// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const findTwoSum1 = (arr, target) => {
  for (let p1 = 0; p1 < arr.length; p1++) {
    num_to_find = target - arr[p1];
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      if (num_to_find === arr[p2]) return [p1, p2];
    }
  }
  return null;
};

// ==== REFACTORED ====

const findTwoSum2 = (arr, target) => {
  const numsMap = {};
  for (let p1 = 0; p1 < arr.length; p1++) {
    const currentMapVal = numsMap[arr[p1]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p1];
    } else {
      const num_to_find = target - arr[p1];
      numsMap[num_to_find] = p1;
    }
  }
  return null;
};

// ==== REFACTORED ====

// const findTwoSum3 = (arr, target) => {
//   const numsMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (numsMap.has(complement)) {
//       return [numsMap.get(complement), i];
//     }
//     numsMap.set(arr[i], i);
//   }
//   return null;
// };
