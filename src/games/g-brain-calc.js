import randomNum from '../random_num.js';

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = (a + b);
  } else if (operator === '-') {
    result = (a - b);
  } else if (operator === '*') {
    result = (a * b);
  }
  return result;
};

const operators = ['+', '-', '*'];
const BrainCalc = () => {
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);

  const operator = operators[randomNum(0, 2)];
  const question = `${a} ${operator} ${b}`;

  const correctAnswer = (calc(a, b, operator)).toString();
  const rules = 'What is the result of the expression?';

  return [question, correctAnswer, rules];
};
export default BrainCalc;

/*
старый код

const rules = 'What is the result of the expression?';

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = (a + b);
  } else if (operator === '-') {
    result = (a - b);
  } else if (operator === '*') {
    result = (a * b);
  }
  return result;
};

const operators = ['+', '-', '*'];
const BrainCalc = () => {
  const a = randomNum(1, 10);
  const b = randomNum(1, 10);

  const operator = operators[randomNum(0, 2)];
  const question = `${a} ${operator} ${b}`;

  const correctAnswer = (calc(a, b, operator)).toString();

  return [question, correctAnswer];
};
export { rules, BrainCalc };
*/
