// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

const maxWaterContainer1 = (arr) => {
  let maxArea = 0;
  for (let p1 = 0; p1 < arr.length; p1++) {
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      const h = Math.min(arr[p1], arr[p2]);
      const w = p2 - p1;
      const area = h * w;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

// ==== REFACTORED ====

const maxWaterContainer2 = (arr) => {
  let maxArea = 0;
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    const h = Math.min(arr[p1], arr[p2]);
    const w = p2 - p1;
    const area = h * w;
    maxArea = Math.max(maxArea, area);
    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};
