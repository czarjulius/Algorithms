var thirdMax1 = function (nums) {
  const arr1 = [...new Set(nums)];
  const arr = arr1.sort((a, b) => a - b);
  const n = arr.length;
  if (arr.length < 3) return arr[n - 1];

  return arr[n - 3];
};

// thirdMax1([2,2,3,1])
