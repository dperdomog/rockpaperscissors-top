function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playerSelection()
{
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return "It's a tie!";
    }
    else if (playerSelection === "rock")
    {
        if (computerSelection === "paper")
        {
            return "You lose! Paper beats Rock";
        }
        else
        {
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "scissors")
        {
            return "You lose! Scissors beats Paper";
        }
        else
        {
            return "You win! Paper beats Rock";
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            return "You lose! Rock beats Scissors";
        }
        else
        {
            return "You win! Scissors beats Paper";
        }
    }
    else
    {
        return "Invalid choice";
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    do{
        let result = playRound(playerSelection(), getComputerChoice());
        if (result.includes("win"))
        {
            playerScore++;
        }
        else if (result.includes("lose"))
        {
            computerScore++;
        }
        console.log(result);
    } while (playerScore < 5 && computerScore < 5)
    if (playerScore == 5)
    {
        console.log("You win the game!");
    }
    else
    {
        console.log("You lose the game!");
    }
}


//console.log (playRound(playerSelection(), getComputerChoice()));
game();