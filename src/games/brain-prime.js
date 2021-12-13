import randomNum from '../random_num.js';

const findPrimeNum = (randomPrimeNum) => {
  const sqrPrimeNum = Math.sqrt(randomPrimeNum);

  for (let i = 2; i < sqrPrimeNum; i += 1) {
    if (randomPrimeNum % i === 0) {
      return false;
    }
  }
  return randomPrimeNum > 1;
};
const generator = () => {
  const randomPrimeNum = randomNum(1, 100);
  return randomPrimeNum;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  const roundGenerator = () => {
    const randomPrimeNum = generator();

    const question = randomPrimeNum;
    const correctAnswer = findPrimeNum(randomPrimeNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};

export default brainPrime;
