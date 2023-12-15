var findMaxAverage = function (nums, k) {
  let maxAverage = 0;
  let temp = 0;

  for (let i = 0; i < k; i++) {
    maxAverage = maxAverage + nums[i];
  }
  temp = maxAverage;

  for (let i = k; i < nums.length; i++) {
    temp = temp - nums[i - k] + nums[i];

    maxAverage = Math.max(maxAverage, temp);
  }
  return maxAveraggite / k;
};

// findMaxAverage([1,12,-5,-6,50,3],4)
