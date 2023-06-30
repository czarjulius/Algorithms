function nFibonacci1(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;

  return nFibonacci1(num - 1) + nFibonacci1(num - 2);
}

function nFibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = nFibonacci(n - 1, memo) + nFibonacci(n - 2, memo);
  return memo[n];
}

// nFibonacci(100);
