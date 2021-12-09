import randomNum from '../random_num.js';

const findGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGCD(num2, num1 % num2);
};
const rules = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const roundGenerator = () => {
    const num1 = randomNum(1, 100);
    const num2 = randomNum(1, 100);

    const question = `${num1} ${num2}`;
    const correctAnswer = (findGCD(num2, num1 % num2)).toString();

    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};
export default brainGcd;
