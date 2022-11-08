'use strict';

// selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl= document.getElementById('diceimg');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const cur0El = document.getElementById('current--0');

//starting conditions


score0El.textContent = 12;
score1El.textContent = 2;
let curScore= 0;
let activePlayer = 0;

//roll dice

btnRoll.addEventListener('click', function(){
    let ranNum = Math.trunc(Math.random() * 6)+1;
    diceEl.style.visibility = 'visible';
    diceEl.src = `dice-${ranNum}.png`;

    if(ranNum ===1){  //switch player
        let cur = document.getElementById(`current--${activePlayer}`);
        cur.textContent=0; 
        curScore=0;
       
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }else{
        curScore+=ranNum;
        let cur = document.getElementById(`current--${activePlayer}`);
        cur.textContent = curScore;    
    }
});