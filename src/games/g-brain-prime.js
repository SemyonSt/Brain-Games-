import randomNum from '../random_num.js';

const intager = (randomNumber) => {
  let resault = true;
  if (randomNumber === 1) {
    return false;
  }
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      resault = false;
      break;
    }
  }
  return resault;
};

const BrainPrime = () => {
  const randomNumber = randomNum(1, 2);
  const question = randomNumber;
  const correctAnswer = intager(randomNumber) ? 'yes' : 'no';
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return [question, correctAnswer, rules];
};

export default BrainPrime;
