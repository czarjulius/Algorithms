const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// for (const item of obj) {
//   console.log(item);
// }

//----Generators Veersion

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const generatorObj = generatorFunction();

for (const word of generatorObj) {
  console.log(word);
}
