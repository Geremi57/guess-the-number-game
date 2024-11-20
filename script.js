'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!🎉';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const x = function () {
  console.log(23);
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //when there's no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number⛔!';

    displayMessage('No number⛔!');
  }

  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct number!🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('body').style.color = 'black';
    document.querySelector('main').style.color = 'black';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      document.querySelector('.guess').value = '';
      // document.querySelector('.score').textContent =
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent =
      displayMessage('You lost the game 😥 try again');
      document.querySelector('.guess').value = '';
      
    document.querySelector('.number').textContent = secretNumber;
      // document.querySelector('.score').textContent =
      displayScore(0);
    }
  }

  //when player guessed too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game 😥 try again';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when player guessed too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game 😥 try again';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  // document.querySelector('.score').textContent =

  displayScore(score);

  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent =
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('main').style.color = '#eee';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
