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

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundGenerator = () => {
  const randomPrimeNum = randomNum(1, 100);

  const question = randomPrimeNum;
  const correctAnswer = findPrimeNum(randomPrimeNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => [roundGenerator, rules];

export default brainPrime;
