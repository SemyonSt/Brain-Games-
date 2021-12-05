import randomNum from '../random_num.js';

const intager = (randomNumber) => {
  if (randomNumber === 1) {
    return false;
  }
  for (let i = 2; i < randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const BrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = () => {
    const randomNumber = randomNum(1, 100);
    const question = randomNumber;
    const correctAnswer = intager(randomNumber) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  return [game, rules];
};

export default BrainPrime;
