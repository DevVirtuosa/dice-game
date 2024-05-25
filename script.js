'use strict';

// Begining state
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');

let activePlayer = 1;

let randomNum;
let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;

document.querySelector('.btn--hold').addEventListener('click', function () {
  //   totalScorePlayer1 = totalScorePlayer1 + currentScorePlayer1;

  if (activePlayer === 1) {
    totalScorePlayer1 = totalScorePlayer1 + currentScorePlayer1;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#score--0').textContent = totalScorePlayer1;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    currentScorePlayer1 = 0;
    activePlayer = 2;
  } else if (activePlayer === 2) {
    totalScorePlayer2 = totalScorePlayer2 + currentScorePlayer2;
    document.querySelector('#current--1').textContent = 0;
    document.querySelector('#score--1').textContent = totalScorePlayer2;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    currentScorePlayer2 = 0;
    activePlayer = 1;
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  document.querySelector('.dice').classList.add('hidden');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  currentScorePlayer1 = 0;
  currentScorePlayer2 = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;

  activePlayer = 1;
});

document.querySelector('.btn--roll').addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * 6 + 1);
  document.querySelector('.dice').classList.remove('hidden');
  document.querySelector('.dice').src = `dice-${randomNum}.png`;

  if (activePlayer === 1) {
    currentScorePlayer1 = currentScorePlayer1 + randomNum;

    document.querySelector('#current--0').textContent = currentScorePlayer1;

    if (randomNum === 1) {
      document.querySelector('#current--0').textContent = 0;
      currentScorePlayer1 = 0;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');

      activePlayer = 2;
    }
  } else if (activePlayer === 2) {
    currentScorePlayer2 = currentScorePlayer2 + randomNum;

    document.querySelector('#current--1').textContent = currentScorePlayer2;

    if (randomNum === 1) {
      document.querySelector('#current--1').textContent = 0;
      currentScorePlayer2 = 0;
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');

      activePlayer = 1;
    }
  }
});
console.log(currentScorePlayer1);
