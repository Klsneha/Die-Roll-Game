/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;
var gamePlay;
var prev=0;

init();

document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlay)
        {
            
            console.log("prev"+ prev);
            
            var dice1=Math.floor(Math.random()*6)+1;
            var dice2=Math.floor(Math.random()*6)+1;
            
            
           document.getElementById('dice-1').style.display='block';
           document.getElementById('dice-2').style.display='block';
            
          
            document.getElementById('dice-1').src='./dice-'+dice1+'.png';
            document.getElementById('dice-2').src='./dice-'+dice2+'.png';

            
           /* if(prev=== 6 && dice===6 )
            {
                console.log("here");
                scores[activePlayer]=0;
                document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
                nextPlayer();
            }*/
            if(dice1 !== 1 && dice2!== 1)
            {

                roundScore+=dice1+dice2;
                document.querySelector("#current-"+activePlayer).textContent = roundScore;
                //prev=dice;

            }
            else{
               nextPlayer();


            }
        }
    
})


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlay)
        {
             // add scores to global and update scores
            scores[activePlayer]+=roundScore;
            document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

            //if player won the game
            var winScore=document.querySelector("#win-score").value;
            console.log(winScore);
            if(scores[activePlayer]>=winScore)
            {
                document.querySelector('#name-'+activePlayer).textContent="Winner";
                document.getElementById('dice-1').style.display='none';
                document.getElementById('dice-2').style.display='none';
                document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                gamePlay=false;
            }
            else{
                //Next Player
                nextPlayer();
            }

        }
   
        
})

function nextPlayer()
{
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    activePlayer===0? activePlayer=1: activePlayer=0;
    roundScore=0;
    prev=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    //document.querySelector(".dice").style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    scores=[0,0];
    roundScore=0;
    activePlayer=0; 
    gamePlay=true;
    
    document.querySelector('#dice-1').style.display='none';
    document.querySelector('#dice-2').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-1').textContent="Player 1";
    document.querySelector('#name-0').textContent="Player 0";
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');
}



