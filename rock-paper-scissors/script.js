let scores=JSON.parse(localStorage.getItem('score')) || {Win:0, Lose:0, Tie:0 };
updateScoreElement();

function playGame(playerMove){
    const computerMove=pickComputerMove()
    let result='';
    if (playerMove=='Scissors'){
        if (computerMove=='Rock'){
        result='You lose.'

        }
        else if(computerMove=='Paper'){
            result='You Win.'

        }
        else{
            result='Tie.'

        }
    }
    else if(playerMove='Rock'){
        if (computerMove=='Rock'){
            result='Tie.'
            }
        else if(computerMove=='Paper'){
            result='You lose.'
            }
        else{
            result='You win.'
            }

    }
    else{
        if (computerMove=='Rock'){
            result='You win.'
            }
        else if(computerMove=='Paper'){
            result='Tie.'
            }
        else{
            result='You lose.'
            }

    }
    if(result=='You win.'){
        scores.Win+=1;
    }
    else if(result=='You lose.'){
        scores.Lose+=1;
    }
    else{
        scores.Tie+=1;
    }
    localStorage.setItem('score', JSON.stringify(scores));

    updateScoreElement();
    updateMoves(playerMove, computerMove);
    updateResult(result);
    
}
function updateResult(result){
    document.querySelector('.js-result').innerHTML=`${result}`;
}
function updateMoves(playerMove, computerMove){
    document.querySelector('.js-moves').innerHTML=`You <img class="result-emoji" src="emojis/${playerMove.toLowerCase()}-emoji.png"> <img class="result-emoji" src="emojis/${computerMove.toLowerCase()}-emoji.png"> Computer`
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins:${scores.Win}, Losses:${scores.Lose}, Ties:${scores.Tie}`;
}
function pickComputerMove(){
    let computerMove=''
    const randomNumber=Math.random();
    if (randomNumber<=1/3){
        computerMove='Rock';
    }   
    else if(randomNumber<=2/3){
        computerMove='Paper';
    }
    else{
        computerMove='Scissors';
    }
    return computerMove;

}
function getScore(){
    scores=JSON.parse(localStorage.getItem('score')) || {Win:0, Lose:0, Tie:0};
    alert(`Wins: ${scores.Win}, Loses: ${scores.Lose}, Ties: ${scores.Tie}`);
}