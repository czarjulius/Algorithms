var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const arr = s.split('');
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if (!vowels.includes(arr[lo]) && !vowels.includes(arr[hi])) {
      lo++;
      hi--;
    } else if (!vowels.includes(arr[lo]) && vowels.includes(arr[hi])) {
      lo++;
    } else if (vowels.includes(arr[lo]) && !vowels.includes(arr[hi])) {
      hi--;
    } else if (vowels.includes(arr[lo]) && vowels.includes(arr[hi])) {
      let temp = arr[lo];
      arr[lo] = arr[hi];
      arr[hi] = temp;
      lo++;
      hi--;
    }
  }

  return arr.join('');
};
