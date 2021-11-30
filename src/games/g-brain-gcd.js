import randomNum from '../random_num.js';

const twonumbers = (a, b) => {
  if (b === 0) {
    return a;
  }
  return twonumbers(b, a % b);
};

const BrainGcd = () => {
  const a = randomNum(1, 100);
  const b = randomNum(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = (twonumbers(b, a % b)).toString();
  const rules = 'Find the greatest common divisor of given numbers.';

  return [question, correctAnswer, rules];
};
export default BrainGcd;
