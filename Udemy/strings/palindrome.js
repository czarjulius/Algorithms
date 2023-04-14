const isValidPalindrome = (str, left, right) => {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Almost palindrome solution

const isAlmostPalindrome = (str) => {
  let left = 0;
  right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return isValidPalindrome(str, left + 1, right) || isValidPalindrome(str, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
