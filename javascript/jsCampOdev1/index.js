// FIND SUM OF DIVIDERS OF A NUMBER
const sumOfDividers = (number) => {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
};

// FIND PRIME NUMBERS IN A GIVEN NUMBERS ARRAY
const findPrimeNumbers = (...numbers) => {
  const primeNumbersArray = [];
  numbers.forEach((number) => {
    let count = 0;

    if (number === 2 || number % 2 !== 0) {
      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          count++;
        }
      }
    }

    if (count === 2) {
      primeNumbersArray.push(number);
    }
  });
  console.log(primeNumbersArray);
};
findPrimeNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

// FIND IF A TWO NUMBERS ARE AMICABLE
const amicableNumbers = (number1, number2) => {
  const sumOfDividersNumber1 = sumOfDividers(number1);
  const sumOfDividersNumber2 = sumOfDividers(number2);
  return sumOfDividersNumber1 === number2 && sumOfDividersNumber2 === number1
    ? `${number1} and ${number2} are friends 🥳`
    : `${number1} and ${number2} are not friends 😥`;
};
console.log(amicableNumbers(220, 284));

// FIND PERFECT NUMBERS BETWEEN 1 - 1000
const perfectNumbers = () => {
  const perfectNumbersArray = [];
  for (let i = 1; i < 1000; i++) {
    if (sumOfDividers(i) === i) {
      perfectNumbersArray.push(i);
    }
  }
  console.log(perfectNumbersArray);
};
perfectNumbers();

// FIND PRIME NUMBERS BETWEEN 1 - 1000
const printPrimeNumbers = () => {
  const numbers = [];
  for (let i = 1; i < 1000; i++) {
    numbers.push(i);
  }
  findPrimeNumbers(...numbers);
};
printPrimeNumbers();
