import randomNum from '../random_num.js';

const generateProgression = (stepProgression, lengthProgression, firstNum) => {
  const mas = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    mas.push(firstNum + i * stepProgression);
  }
  return mas;
};

const rules = 'What number is missing in the progression?';

const roundGenerator = () => {
  const stepProgression = randomNum(1, 10);
  const lengthProgression = randomNum(5, 10);
  const hiddenNum = randomNum(0, lengthProgression);
  const firstNum = randomNum(0, 10);

  const progression = generateProgression(stepProgression, lengthProgression, firstNum);
  const correctAnswer = (progression[hiddenNum]).toString();

  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const brainProgression = () => [roundGenerator, rules];
export default brainProgression;
