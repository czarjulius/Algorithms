const directions = [
  [-1, 0][(0, 1)][(1, 0)][(0, -1)], // up, // right, // down, // left
];

const traversalDFS = function (matrix) {
  const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  const values = [];
  const queue = [[0, 0]];

  while (queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];

    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
      continue;
    }
    seen[row][col] = true;
    values.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }
  return values;
};
