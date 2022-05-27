// function addNumbers(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const result = addNumbers(10, 20);
// console.log(result);

// const addNumbers = (num1, num2) => num1 + num2;
// const result = addNumbers(10, 20);
// console.log(result);

const doMath = (a, b) => {
  const sum = a + b;
  const diff = a - b;
  const multi = a * b;
  const total = (sum + diff) * multi;
  return total;
};

const output = doMath(200, 319);
console.log(output);
