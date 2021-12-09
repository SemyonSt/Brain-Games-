import randomNum from '../random_num.js';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

const operators = ['+', '-', '*'];
const rules = 'What is the result of the expression?';
const brainCalc = () => {
  const roundGenerator = () => {
    const num1 = randomNum(1, 10);
    const num2 = randomNum(1, 10);

    const operator = operators[randomNum(0, 2)];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = (calc(num1, num2, operator)).toString();

    return [question, correctAnswer];
  };
  return [roundGenerator, rules];
};
export default brainCalc;
