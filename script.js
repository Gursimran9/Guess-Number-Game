let guess = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const secretNumber = document.querySelector('.number');
const inputValue = document.querySelector('.guess');
const currentScore = document.querySelector('.score');
const currentHighScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const body = document.querySelector('body');

btnCheck.addEventListener('click', function () {
  if (!Number(inputValue.value)) {
    message.textContent = '🚫 No Number';
  } else if (Number(inputValue.value) === guess) {
    message.textContent = '🎉 Correct Answer';
    secretNumber.textContent = guess;
    secretNumber.style.width = '30rem';
    body.style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      currentHighScore.textContent = highScore;
    }
  } else if (Number(inputValue.value) !== guess) {
    if (score > 1) {
      message.textContent =
        Number(inputValue.value) > guess ? 'Too high📈' : 'Too low📉';
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = 'You lost the Match🚫';
      currentScore.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  guess = Math.floor(Math.random() * 20 + 1);
  message.textContent = 'Start Guessing...';
  inputValue.value = '';
  body.style.backgroundColor = '#222';
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
  score = 20;
  currentScore.textContent = score;
});
