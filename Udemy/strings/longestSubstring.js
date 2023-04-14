// Given a string s, find the length of the longest substring without repeating characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const longestSubstring1 = (str) => {
  if (str.length <= 1) return str.length;
  let longest = 0;
  for (let left = 0; left < str.length; left++) {
    let seenChars = {};
    let curLength = 0;
    for (let right = left; right < str.length; right++) {
      const curChar = str[right];
      if (!seenChars[curChar]) {
        curLength++;
        seenChars[curChar] = true;
        longest = Math.max(longest, curLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

// ==== REFACTORED ====

const lengthOfLongestSubstring2 = function (str) {
  if (str.length <= 1) return str.length;
  let longest = 0;
  for (let left = 0; left < str.length; left++) {
    let seenChars = {};
    let curLength = 0;
    for (let right = left; right < str.length; right++) {
      const curChar = str[right];
      if (!seenChars[curChar]) {
        curLength++;
        seenChars[curChar] = true;
        longest = Math.max(longest, curLength);
      } else {
        break;
      }
    }
  }

  return longest;
};
