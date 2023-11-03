var diagonalSum = function (mat) {
  let n = mat.length;
  let sumP = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j == n - 1) {
        sumP += mat[i][j];
      }
    }
  }
  return sumP;
};
