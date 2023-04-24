
let playerScore = 0;
let computerScore = 0;
let roundwinner = '';
const result = document.getElementById('result');
const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');

rock.addEventListener('click', () => { handleClick('rock') });
paper.addEventListener('click', () => { handleClick('paper') });
scissors.addEventListener('click', () => { handleClick('scissors') });
reset.addEventListener('click', () => { resetGame() });


function playRound(playerSelection, computerSelection)
{
 
    if (playerSelection === computerSelection)
    {
        roundwinner = "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    )
    {
        playerScore++;
        roundwinner = 'player';
    }

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
    )
    {
        computerScore++;
        roundwinner = 'computer';
    }

    UpdateScore (roundwinner, playerScore, computerScore);
}


function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}




function UpdateScore(roundwinner, playerScore, computerScore)
{
    if (roundwinner == 'It\'s a tie!')
    {
        result.textContent = "It's a tie!";

    } else if (roundwinner == 'player')
    {
        result.textContent = "You win the round!";
    } else if (roundwinner == 'computer')
    {
        result.textContent = "You lose the round!";
    }

    playerScoreDiv.textContent = `${playerScore}`
    computerScoreDiv.textContent = `${computerScore}`


}

function gameOver ()
{
    if (playerScore == 5)
    {
        result.textContent = "You win the game!";
    } else if (computerScore == 5)
    {
        result.textContent = "You lose the game!";
    }
}


function handleClick(playerChoice){

{if (playerScore < 5 && computerScore < 5){
    playRound(playerChoice, getComputerChoice());
    UpdateScore(roundwinner, playerScore, computerScore);
    gameOver();
} else {
    result.textContent = "Game over! Please click reset to play again.";
}
}
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    roundwinner = '';
    result.textContent = '';
    playerScoreDiv.textContent = `${playerScore}`
    computerScoreDiv.textContent = `${computerScore}`
}

//console.log (playRound(playerSelection(), getComputerChoice()));
