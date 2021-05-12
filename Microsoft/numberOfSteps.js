function numberOfSteps(S){
  let x = parseInt(S, 2)
      let count = 0;
      while (x != 0) {
          if (x % 2 == 0) {
              x /= 2;
              count++;
          } else {
              x -= 1;
              count++;
          }
      }
      return count;
}