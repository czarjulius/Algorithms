var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  if (nums.length < 3) return false;

  const product1 = nums[0] * nums[1] * nums[n - 1];
  const product2 = nums[n - 3] * nums[n - 2] * nums[n - 1];

  return Math.max(product1, product2);
};

// maximumProduct([3,4])
