import randomNum from '../random_num.js';

const integer = (randomPrimeNum) => {
  if (randomPrimeNum === 1) {
    return false;
  }
  for (let i = 2; i < randomPrimeNum / 2; i += 1) {
    if (randomPrimeNum % i === 0) {
      return false;
    }
  }
  return true;
};

const lowerBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundGenerator = () => {
    const randomPrimeNum = randomNum(1, 100);
    const question = randomPrimeNum;
    const correctAnswer = integer(randomPrimeNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};

export default lowerBrainPrime;
