'use strict';

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}


let secrectNumber = getRandomArbitrary(1, 20);
let flag = false;

const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
input.value = '';

function reset() {
  number.textContent = '?';
  input.value = '';
  score.textContent = 5;
  flag = false;
  message.textContent = 'Start guessing...';
  secrectNumber = getRandomArbitrary(1, 20);
}

const check = document.querySelector('.check').addEventListener('click', () => {
  if (flag) return;

  if(parseInt(score.textContent) <= 0) {
    reset();
    message.textContent = 'Game Over!!';
    flag = true;
    return ;
  }

  if (!input.value) {
    message.textContent = 'No number!';
  }

  const valueInput = parseInt(input.value);
  if (valueInput <= 20 && valueInput > 0) {
    number.textContent = valueInput;
  } else return;

  if (secrectNumber == number.textContent) {
    message.textContent = 'Correct number!';
    flag = true;
    const a = parseInt(highScore.textContent);
    const b = parseInt(score.textContent);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (a < b) highScore.textContent = score.textContent;
  } else {
    if (valueInput > secrectNumber) message.textContent = 'To high!';
    else message.textContent = 'To low!';

    score.textContent = parseInt(score.textContent) - 1;
  }
});

const again = document.querySelector('.again').addEventListener('click', () => {
  reset();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
