// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

const buildStr = (str) => {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '#') {
      output.push(str[i]);
    } else {
      output.pop();
    }
  }
  return output.join('');
};

const backspaceCompare1 = (str1, str2) => {
  const str1Value = buildStr(str1);
  const str2Value = buildStr(str2);
  if (str1Value.length !== str2Value.length) {
    return false;
  } else {
    for (let p = 0; p < str1Value.length; p++) {
      if (str1Value[p] !== str2Value[p]) {
        return false;
      }
    }
  }

  return true;
};

// ==== REFACTORED ====

const backspaceCompare2 = function (s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  let skipS = 0;
  let skipT = 0;

  while (p1 >= 0 || p2 >= 0) {
    while (p1 >= 0) {
      if (s[p1] === '#') {
        skipS++;
        p1--;
      } else if (skipS > 0) {
        skipS--;
        p1--;
      } else break;
    }

    while (p2 >= 0) {
      if (t[p2] === '#') {
        skipT++;
        p2--;
      } else if (skipT > 0) {
        skipT--;
        p2--;
      } else break;
    }

    // If two actual characters are different
    if (p1 >= 0 && p2 >= 0 && s[p1] !== t[p2]) return false;

    // If expecting to compare char vs nothing
    if (p1 >= 0 !== p2 >= 0) return false;
    p1--;
    p2--;
  }
  return true;
};
