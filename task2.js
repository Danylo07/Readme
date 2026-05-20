task2.js
function createCounter(initial) {
  let value = initial;

  return {
    increment() {
      value++;
      return value;
    },

    decrement() {
      value--;
      return value;
    },

    getValue() {
      return value;
    },

    reset() {
      value = initial;
    }
  };
}

// тест
const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());
counter.reset();
console.log(counter.getValue());
