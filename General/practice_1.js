// Frequency counter
// Multiple pointer
// Sliding window
// Divide and conquer

// #########################################################################

const listFibonnachiSequence = (n) => {
  let output = [0, 1];
  for (let i = 2; i <= n; i++) {
    const nextValue = output[i - 1] + output[i - 2];
    output.push(nextValue);
  }

  return output;
};
// listFibonnachiSequence(33)

function factorial(num) {
  if (num === 1) return num;

  return num * factorial(num - 1);
}

// factorial(5)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([1,2,3], [1,4,9])

function anagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  const w1 = word1.split('').sort().join('');
  const w2 = word2.split('').sort().join('');
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) return false;
  }

  return true;
}

// anagram('awesome', 'awesom')

function sumTwoNumbers1(arr) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// sumTwoNumbers1([-3,-2,-1,0,1,2,3,4,5])

function sumTwoNumbers2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// sumTwoNumbers2([-4,-3,-2,-1,0,1,2,3,4,5])

function CountUniqueValues(arr) {
  let uniquValues = {};

  for (let i of arr) {
    uniquValues[i] = ++uniquValues[i] || 1;
  }
  return Object.keys(uniquValues).length;
}

// CountUniqueValues([1,1,1,1,1,1,1,2])

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// maxSubArraySum([4,5,2,1,3,6,1,0,9,1,3,5,8,0,6,7,9],3)

function search(arr, num) {
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}
// search([1,2,3,4,5,6,9, 14], 14)

function divider_conquer(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const middleIndex = Math.floor((min + max) / 2);
    const middleValue = arr[middleIndex];
    if (middleValue < val) {
      min = middleIndex + 1;
    } else if (middleValue > val) {
      max = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}
// divider_conquer([1,2,3,4,5,6,9, 14], 14)
