import readlineSync from 'readline-sync';

const numberRounds = 3;
const EngineGame = (Game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const [round, rules] = Game();
  console.log(rules);

  for (let i = 0; i < numberRounds; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default EngineGame;
