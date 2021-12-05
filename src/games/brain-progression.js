import randomNum from '../random_num.js';

const progression = (stepProgression, lengthProgression) => {
  const mas = [];
  const firstNum = randomNum(0, 10);

  for (let i = 0; i <= lengthProgression; i += 1) {
    mas.push(firstNum + i * stepProgression);
  }
  return mas;
};

const BrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const game = () => {
    const stepProgression = randomNum(1, 10);
    const lengthProgression = randomNum(5, 10);
    const hiddenNum = randomNum(0, lengthProgression);

    const intager = progression(stepProgression, lengthProgression);
    const correctAnswer = (intager[hiddenNum]).toString();

    intager[hiddenNum] = '..';
    const question = intager.join(' ');
    return [question, correctAnswer];
  };

  return [game, rules];
};
export default BrainProgression;

/*
const BrainProgression = () => {
  const stepProgression = randomNum(1, 10);
  const lengthProgression = randomNum(5, 10);
  const hiddenNum = randomNum(0, lengthProgression);

  const intager = progression(stepProgression, lengthProgression);
  const correctAnswer = (intager[hiddenNum]).toString();

  intager[hiddenNum] = '..';
  const question = intager.join(' ');
  const rules = 'What number is missing in the progression?';

  return [question, correctAnswer, rules];
};
*/
