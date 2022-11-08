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


score0El.textContent = 0;
score1El.textContent = 0;
let curScore= 0;
let activePlayer = 0;
let playing = true;

//roll dice

btnRoll.addEventListener('click', function(){

    if(playing){
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
    }
    
});

btnHold.addEventListener('click', function(){

    if(playing){
            let cur = document.getElementById(`current--${activePlayer}`);
        let currScore = Number(cur.textContent);

        let mainScore = document.getElementById(`score--${activePlayer}`);
        mainScore.textContent = Number(mainScore.textContent)+currScore;

        cur.textContent = 0;

        if(mainScore >= 100){
            playing=false;
            document.querySelector(`player--${activePlayer}}`).classList.add('player--winner');
            document.querySelector(`player--${activePlayer}}`).classList.remove('player--active');
        }

        //switch player
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

        cur = document.getElementById(`current--${activePlayer}`);
        cur.textContent = 0;
    }
    
});