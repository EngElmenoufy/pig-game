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

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const totalScore1 = document.querySelector('#score--0');
const totalScore2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
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

let currentRole = null;
