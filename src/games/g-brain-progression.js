import randomNum from '../random_num.js';

const progression = (a) => {
  const mas = [];
  let b = 0;

  for (let i = 0; i <= 7; i += 1) {
    b += a;
    mas.push(b);
  }
  return mas;
};

const BrainProgression = () => {
  const a = randomNum(1, 10);
  const c = randomNum(0, 6);

  const intager = progression(a);
  const correctAnswer = (intager[c]).toString();

  intager[c] = '..';
  const question = intager.join(' ');
  const rules = 'What number is missing in the progression?';

  return [question, correctAnswer, rules];
};
export default BrainProgression;
