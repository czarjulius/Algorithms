var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word) return true;
  if (word.toUpperCase() === word) return true;
  const slicedWord = word.slice(1).toLowerCase();
  if (word[0].toUpperCase() + slicedWord === word) return true;
  return false;
};
