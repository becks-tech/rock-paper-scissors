console.log('hello world!')

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

function playRound(playerSelection, computerSelection){
    let playerScore = 0
    let computerScore = 0
    if (playerSelection === computerSelection){
        return "It's a tie!";
        playerScore-=1
        computerScore-=1
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore+=1
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
    computerSelection === 'paper' && playerSelection == 'rock' ||
    computerSelection === 'scissors' && playerSelection === 'paper'){
        computerScore+=1
        return 'Computer wins! ' + computerSelection + ' beats ' + playerSelection;
        
    }
    return playerScore, computerScore
}

function game(computerScore, playerScore){
    for(let i =0; i<5; i++){
        let computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("Rock, Paper, Scissors...").toLowerCase()
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore){
        return "You win!"
    } else if(
        playerScore === computerScore){
            return "It's a tie!"
    }else {
        return 'You lose!'
    }
}
game();

