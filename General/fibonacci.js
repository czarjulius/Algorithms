function nFibonacci1(num) {
  if (num <= 1) return num;

  return nFibonacci1(num - 1) + nFibonacci1(num - 2);
}

function nFibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = nFibonacci(n - 1, memo) + nFibonacci(n - 2, memo);
  return memo[n];
}

// nFibonacci(100);

//list out all values to the nth term
const nfibonnachi = (n) => {
  let output = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextValue = output[i - 1] + output[i - 2];
    output.push(nextValue);
  }

  return output;
};
