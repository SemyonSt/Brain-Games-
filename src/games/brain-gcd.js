import randomNum from '../random_num.js';

const twonumbers = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return twonumbers(num2, num1 % num2);
};

const BrainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const game = () => {
    const num1 = randomNum(1, 100);
    const num2 = randomNum(1, 100);

    const question = `${num1} ${num2}`;
    const correctAnswer = (twonumbers(num2, num1 % num2)).toString();

    return [question, correctAnswer];
  };
  return [game, rules];
};
export default BrainGcd;
