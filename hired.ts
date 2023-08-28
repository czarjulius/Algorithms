// // you are at the bottom of a staircase with n stairs. You can jump 1,2, or 3 stairs at a time.
// //How many different ways can you jump up the stairs.
// //write a javascript function for the case above

// function numWaysStairs(n) {
//   if (n <= 2) {
//     return n;
//   }

//   const ways = [1, 1, 2];

//   for (let i = 3; i <= n; i++) {
//     ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
//   }

//   return ways[n];
// }
