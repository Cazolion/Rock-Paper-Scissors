function getComputerChoice() {
    const choice = [
        "rock",
        "paper",
        "scissors"
      ];
      
      let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

      return randomItem;
}

function getPlayerChoice() {
    let weapon = prompt("Which weapon do you choose?");
    
    return weapon.toLowerCase();
}

function playRound() {
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    
    if (player === computer) {
        return("It's a tie!");
        }
        
    else if (player === "rock" && computer === "paper") {
        return("You lose! Paper beats Rock");
        }

    else if (player === "rock" && computer === "scissors") {
        return("You win! Rock beats Scissors");
        }

    else if (player === "paper" && computer === "rock") {
        return("You win! Paper beats Rock");
        }

    else if (player === "paper" && computer === "scissors") {
        return("You lose! Scissors beat Paper");
        }

    else if (player === "scissors" && computer === "rock") {
        return("You lose! Rock beats Scissors");
        }

    else if (player === "scissors" && computer === "paper") {
        return("You win! Scissors beat Paper");
        }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === "You win! Scissors beat Paper" || result === "You win! Paper beats Rock" || result === "You win! Rock beats Scissors") {
            playerScore++
            console.log("You win this round! Score is " + playerScore + " - " + computerScore);
            }
        else {
            computerScore++
            console.log("You lose this round! Score is " + playerScore + " - " + computerScore);
            }
        }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!")
        }
    else {
        console.log("Computer wins! Better luck next time :)")
        }
    }

    console.log(playGame())