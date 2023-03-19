//curWater = min(maxL,maxR) - curHeight

const trappingRainWater1 = (array) => {
  let total = 0;
  for (let p = 0; p < array.length; p++) {
    let maxL = 0;
    let maxR = 0;
    let leftP = p;
    let rightP = p;
    while (leftP >= 0) {
      maxL = Math.max(maxL, array[leftP]);
      leftP--;
    }
    while (rightP < array.length) {
      maxR = Math.max(maxR, array[rightP]);
      rightP++;
    }
    const curWater = Math.min(maxL, maxR) - array[p];
    if (curWater >= 0) {
      total += curWater;
    }
  }
  return total;
};

// ==== REFACTORED ====
const trappingRainWater2 = (array) => {
  let total = 0;
  let left = 0;
  let maxL = 0;
  let maxR = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] <= array[right]) {
      if (array[left] >= maxL) {
        maxL = array[left];
      } else {
        total += maxL - array[left];
      }
      left++;
    } else {
      if (array[right] >= maxR) {
        maxR = array[right];
      } else {
        total += maxR - array[right];
      }
      right--;
    }
  }
  return total;
};
