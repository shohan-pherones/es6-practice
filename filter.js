const myNumbers = [8, 3, 18, 22, 56, 55, 78, 41, 62, 50, 14];

const findEvenNumbers = myNumbers.filter((num) => num % 2 == 0);
const findOddNumbers = myNumbers.filter((num) => num % 2 != 0);
console.log(findOddNumbers);
