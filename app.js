
function computerPlay(){
    let num = Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        case 3:
            return "Rock";
            break;
    }
}
function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if( player === computer ){
        return "Tie! No one win in this Round!"
    }
    if( player === "paper"){
        return computer === "scissors"? 
        "You Lose! Scissors beats Paper": "You Win! Paper beats Rock"; 
    }
    if( player === "scissors"){
        return computer === "rock"? 
        "You Lose! Rock beats Scissors": "You Win! Scissors beats Paper"; 
    }
    if( player === "rock"){
        return computer === "paper"? 
        "You Lose! Paper beats Rock": "You Win! Rock beats Scissors"; 
    }   
}