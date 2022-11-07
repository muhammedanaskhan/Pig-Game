'use strict';

// selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl= document.getElementById('diceimg');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions


score0El.textContent = 12;
score1El.textContent = 2;

//roll dice

btnRoll.addEventListener('click', function(){
    let ranNum = Math.trunc(Math.random() * 6)+1;
    diceEl.style.visibility = 'visible';
    diceEl.src = `dice-${ranNum}.png`;
});