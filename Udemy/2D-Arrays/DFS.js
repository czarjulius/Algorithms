const directions = [
  [-1, 0][(0, 1)][(1, 0)][(0, -1)], // up, // right, // down, // left
];

const traversalDFS = function (matrix) {
  const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
  const values = [];

  dfs(matrix, 0, 0, seen, values);
  return values;
};

const dfs = function (matrix, row, col, seen, values) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
};
