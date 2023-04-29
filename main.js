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
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    //playerScore = 0
    //computerScore = 0
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'papaer'){
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        playerScore++
        if(playerScore === 5 && computerScore < 5){
            return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        } else {
            return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
        }
        
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
    computerSelection === 'paper' && playerSelection == 'rock' ||
    computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'Computer wins! ' + computerSelection + ' beats ' + playerSelection;
        computerScore++
        if (computerScore === 5 && playerScore < 5){
            return 'Computer wins! ' + computerSelection + ' beats ' + playerSelection;
        } else{
            return 'You win! ' + playerSelection + ' beats ' + computerSelection;
        }
    }
}
function game(){
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = prompt("Rock, paper, scissors...").toLowerCase()
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));
}
game();
