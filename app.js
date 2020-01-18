/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer;

scores = [0,0];

roundScore = 0;

activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;    

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

function rollDice(){
    
    var diceValue = Math.floor(Math.random() * 6 ) + 1;

    var dice = document.querySelector('.dice');

    
    dice.style.display = 'block'; 
    
    dice.src = `dice-${diceValue}.png`;
 
    if(diceValue !== 1){
        roundScore += diceValue;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        nextPlayer();
    }
}

function holdScore(){
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
}

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', holdScore);