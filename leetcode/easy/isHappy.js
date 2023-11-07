var isHappy = function (n) {
  const seen = {};
  if (n === 1) return true;

  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquare(n);
  }
  return n === 1 ? true : false;
};

const sumOfSquare = (n) => {
  const nArr = n.toString().split('');
  // return nArr.reduce((sum, val) => sum + Math.pow(val, 2), 0);
};
