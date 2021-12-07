import randomNum from '../random_num.js';

const integer = (randomEvenNum) => randomEvenNum % 2 === 0;
const lowerBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundGenerator = () => {
    const randomEvenNum = randomNum(1, 100);
    const question = randomEvenNum;
    const correctAnswer = integer(randomEvenNum) ? 'yes' : 'no';

    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};

export default lowerBrainEven;
