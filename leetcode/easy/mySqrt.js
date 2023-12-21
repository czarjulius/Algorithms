var mySqrt = function (x) {
  let lower = 0;
  let higher = x;
  while (lower <= higher) {
    const mid = Math.floor((lower + higher) / 2);
    const square = mid * mid;
    if (square <= x) lower = mid + 1;
    else higher = mid - 1;
  }
  return higher;
};
