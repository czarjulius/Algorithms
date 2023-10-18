var plusOne = function (digits) {
  let joinedNumber = '';
  for (let num of digits) {
    joinedNumber += num;
  }

  const addOne = BigInt(joinedNumber) + BigInt(1);

  return Array.from(addOne.toString(), (x) => Number(x));
};

// plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9])
