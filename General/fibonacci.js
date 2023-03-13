function nFibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = nFibonacci(n - 1, memo) + nFibonacci(n - 2, memo);
  return memo[n];
}

// nFibonacci(100);
