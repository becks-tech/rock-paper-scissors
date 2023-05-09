function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()* 3)
    if (computerSelection === 0){
        return "rock"
      } else if (computerSelection === 1){
        return "paper"
      }
      else if (computerSelection === 2){
        return "scissors"
      } 
    return computerSelection;
}
//define outside of function, global scope
let playerScore = 0
let computerScore = 0
let tieCount = 0
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        tieCount +=1
        return "It's a tie!";
        
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore+=1
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '. Your score currently is: ' + playerScore;
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
    computerSelection === 'paper' && playerSelection == 'rock' ||
    computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore+=1
        return 'Computer wins! ' + computerSelection + ' beats ' + playerSelection + ". Computer's score currently is: " + computerScore;
        
    }
   
}
function score(){
    if(playerScore > computerScore){
        return "You win! Your score is " + playerScore + " with " + tieCount + " ties"; 
    } else if(
        playerScore === computerScore){
            return "It's a tie! The scores are " + playerScore + " and " + computerScore;
    }else {
        return "You lose! Computer's score was " + computerScore + " with " + tieCount + " ties, your score was: " + playerScore;
    }
}

function game(){
    for(let i =0; i<5; i++){
        let computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("Rock, Paper, Scissors...").toLowerCase()
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(score())
}
game();

