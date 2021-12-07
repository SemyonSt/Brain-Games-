import randomNum from '../random_num.js';

const progression = (stepProgression, lengthProgression, firstNum) => {
  const mas = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    mas.push(firstNum + i * stepProgression);
  }
  return mas;
};

const lowerBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const roundGenerator = () => {
    const stepProgression = randomNum(1, 10);
    const lengthProgression = randomNum(5, 10);
    const hiddenNum = randomNum(0, lengthProgression);
    const firstNum = randomNum(0, 10);

    const GenerateProgression = progression(stepProgression, lengthProgression, firstNum);
    const correctAnswer = (GenerateProgression[hiddenNum]).toString();

    GenerateProgression[hiddenNum] = '..';
    const question = GenerateProgression.join(' ');
    return [question, correctAnswer];
  };

  return [roundGenerator, rules];
};
export default lowerBrainProgression;
