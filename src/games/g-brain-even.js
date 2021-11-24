import randomNum from '../random_num.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const intager = (randomNumber) => randomNumber % 2 === 0;
const BrainEven = () => {
  const randomNumber = randomNum(1, 100);
  const question = randomNumber;
  const correctAnswer = intager(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { rules, BrainEven };
