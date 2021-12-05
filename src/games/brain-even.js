import randomNum from '../random_num.js';

const intager = (randomNumber) => randomNumber % 2 === 0;
const BrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game = () => {
    const randomNumber = randomNum(1, 100);
    const question = randomNumber;
    const correctAnswer = intager(randomNumber) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  return [game, rules];
};

export default BrainEven;
