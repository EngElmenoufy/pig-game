'use strict';

/*
questions:
  1- what is the idea of the game? answer: the player click roll dice btn, then the dice change
    if the dice not equal 1
      1- add its value to current
    if the dice equal 1
      1- reset the current score of the player to 0
      2- don't add the current score to the total score
      3- go to the second player

    the user can click to hold button
      set his current score to his total score
      reset his current score to 0

sub-problems:
  1- select all elements that want to dynamic it
  2- put all images and its value to an array of object
*/

const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const totalScores = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];
const currentScores = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const diceImage = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const dice = [
  {
    imageSrc: 'dice-1.png',
    value: 1,
  },
  {
    imageSrc: 'dice-2.png',
    value: 2,
  },
  {
    imageSrc: 'dice-3.png',
    value: 3,
  },
  {
    imageSrc: 'dice-4.png',
    value: 4,
  },
  {
    imageSrc: 'dice-5.png',
    value: 5,
  },
  {
    imageSrc: 'dice-6.png',
    value: 6,
  },
];

let currentPlayer = 0;

let currentScore = 0;

function roleDice() {
  const randomRole = Math.trunc(Math.random() * 6);
  const currentDice = dice[randomRole];
  diceImage.classList.remove('hidden');
  diceImage.setAttribute('src', currentDice.imageSrc);
  if (currentDice.value === 1) {
    switchPlayer();
  } else {
    currentScore += currentDice.value;
    currentScores[currentPlayer].textContent = currentScore;
  }
}

rollBtn.addEventListener('click', roleDice);

function switchPlayer() {
  currentScore = 0;
  currentScores[currentPlayer].textContent = '0';
  players[currentPlayer].classList.remove('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  players[currentPlayer].classList.add('player--active');
}

function holdScore() {
  const oldTotal = Number(totalScores[currentPlayer].textContent);
  const total = currentScore + oldTotal;
  totalScores[currentPlayer].textContent = total;
  currentScores[currentPlayer].textContent = 0;
  if (total < 100) {
    switchPlayer();
  } else {
    players[currentPlayer].classList.add('player--winner');
    rollBtn.removeEventListener('click', roleDice);
    holdBtn.removeEventListener('click', holdScore);
    diceImage.classList.add('hidden');
  }
}

holdBtn.addEventListener('click', holdScore);

function playAgain() {
  currentPlayer = 0;
  currentScore = 0;
  for (let i = 0; i <= 1; i++) {
    totalScores[i].textContent = 0;
    currentScores[i].textContent = 0;
    players[i].classList.remove('player--winner');
  }
  diceImage.classList.add('hidden');
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
}

newGameBtn.addEventListener('click', playAgain);
