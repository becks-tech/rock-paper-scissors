function game(){
    const buttons = document.querySelectorAll('input');
    let playerScore = 0
    let computerScore = 0
    
    function getComputerChoice(){
        let computerSelection = Math.floor(Math.random()* 3)
        if (computerSelection === 0){
            return "Rock"
          } else if (computerSelection === 1){
            return "Paper"
          }
          else if (computerSelection === 2){
            return "Scissors"
          } 
        return computerSelection;
    }
 
    function score(){
        let score = "Rock Paper Scissors"
        if(playerScore === 5){
            score = "You win! Your score is " + playerScore +". Reload the page to play again.";
        } else if(
            computerScore === 5){
            score = "You lose! Computer's score is " + computerScore + ". Reload the page to play again.";
        }
        
        document.querySelector('.result').textContent = score
        
    }
    
    
    function playRound(playerSelection){
    
        let computerSelection = getComputerChoice()
        let result = ""
        if (playerSelection === computerSelection){
            result = "It's a tie!";
            
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerScore+=1
            document.querySelector('.player-score').textContent = playerScore
            result = playerSelection + ' beats ' + computerSelection;
        }
        else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Paper' && playerSelection == 'Rock' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper'){
            computerScore+=1
            document.querySelector('.computer-score').textContent = computerScore
            result = computerSelection + ' beats ' + playerSelection;
            
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
  