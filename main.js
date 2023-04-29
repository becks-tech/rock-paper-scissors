console.log('hello world!')

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()* 3)
    return computerSelection
}
console.log(getComputerChoice())