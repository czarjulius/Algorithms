//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const brackets = new Map([
  ["[", "]"],
  ["{", "}"],
  ["(", ")"],
]);

export const isPaired = (str) => {
  let stack = [];
  for (const character of str) {
      if (brackets.has(character)) {
          stack.push(character);
          continue;
      }

      for (const [openingBracket, closingBracket] of brackets.entries()) {
          if (character === closingBracket && stack.pop() !== openingBracket)
              return false;
      }
  }

  return stack.length === 0;
};