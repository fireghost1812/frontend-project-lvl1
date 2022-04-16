#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const checkAnswer = (answer, name, correctAnswer) => {
  console.log(`Your answer: ${answer}!`);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
};

const brainEvent = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let answer = readlineSync.question('15 ');
  checkAnswer(answer, name, 'no');
  answer = readlineSync.question('6 ');
  checkAnswer(answer, name, 'yes');
  answer = readlineSync.question('7 ');
  checkAnswer(answer, name, 'no');
  console.log(`Congratulations, ${name}!`);
};
brainEvent();
