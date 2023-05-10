function game(){
    const buttons = document.querySelectorAll('input');
    const message = document.querySelector('.message')
    const scoreMsg = document.querySelector('.score')
    let playerScore = 0
    let computerScore = 0
    
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
 
    function score(){
        let score = ""
        if(playerScore === 5){
            score = "You win! Your score is " + playerScore +". Reload the page to play again.";
            buttons.disabled = true; 
        } else if(
            computerScore === 5){
            score = "You lose! Computer's score is " + computerScore + ". Reload the page to play again.";
            buttons.disabled = true; 
        }
        document.querySelector('.score').textContent = score
    }
    
    
    function playRound(playerSelection){
    
        let computerSelection = getComputerChoice()
        let result = ""
        if (playerSelection === computerSelection){
            result = "It's a tie!";
            
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'){
            playerScore+=1
            document.querySelector('.player-score').textContent = playerScore
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '. Your score currently is: ' + playerScore;
        }
        else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'paper' && playerSelection == 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper'){
            computerScore+=1
            document.querySelector('.computer-score').textContent = computerScore
            result = 'Computer wins! ' + computerSelection + ' beats ' + playerSelection + ". Computer's score currently is: " + computerScore;
            
        }
        score()
        document.querySelector(".message").textContent = result
        return
        
    }

    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value)
            
        })
    })       
   
};

game();
  