
var scores,roundScore,activePlayer,isGameOn;

init();

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
    
    if(isGameOn){
        var diceValue = Math.floor(Math.random() * 6 ) + 1;

        var dice = document.querySelector('.dice');

        dice.style.display = 'block'; 
        
        dice.src = `assets/dice-${diceValue}.png`;
    
        if(diceValue !== 1){
            roundScore += diceValue;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }else{
            nextPlayer();
        }
    }
}

function holdScore(){
    if (isGameOn) {

        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGameOn = false;
        } else {
            nextPlayer();
        }
    }
}

function init(){

    scores = [0,0];

    roundScore = 0;

    activePlayer = 0;

    isGameOn = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            
    
    var player1 = prompt('Before we start the game enter your name Player 1');
    var player2 = prompt('Player 2 enter your name');

    document.querySelector('#name-0').textContent = player1 && player1 ? player1 :  'player1';
    document.querySelector('#name-1').textContent = player2 && player2 ? player2 :  'player2';
}


document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', holdScore);

document.querySelector('.btn-new').addEventListener('click', init);