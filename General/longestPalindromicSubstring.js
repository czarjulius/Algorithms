function longestPalindromicSubstring(str) {
  const n = str.length;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }
  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    if (i < n - 1 && str[i] === str[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
      start = i;
    }
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (str[i] === str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        if (len > maxLength) {
          maxLength = len;
          start = i;
        }
      }
    }
  }
  return str.slice(start, start + maxLength);
}
