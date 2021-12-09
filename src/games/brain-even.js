import randomNum from '../random_num.js';

const findEvenNum = (randomEvenNum) => randomEvenNum % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const roundGenerator = () => {
    const randomEvenNum = randomNum(1, 100);
    const question = randomEvenNum;
    const correctAnswer = findEvenNum(randomEvenNum) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};

export default brainEven;
