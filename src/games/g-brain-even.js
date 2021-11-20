import readlineSync from 'readline-sync';

console.log('Welcom to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const BrainEven = () => {
  for (let i = 1; i < 4; i += 1) {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log('Question:', randomNum);
    const player = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0) {
      if (player === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${player}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
        return;
      }
    }
    if (randomNum % 2 !== 0) {
      if (player === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${player}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default BrainEven;
