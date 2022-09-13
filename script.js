function getComputerChoice() {
    const choice = [
        "rock",
        "paper",
        "scissors"
      ];
      
      let randomItem = choice[Math.floor(Math.random()*choice.length)]; 

      return randomItem;
};

let playerScore = 0;
let computerScore = 0;
let playGame = true;

function disableButtons() {
    document.getElementById("rock").disabled = true; 
    document.getElementById("paper").disabled = true; 
    document.getElementById("scissors").disabled = true; 
};

const history = document.querySelector('.history');
const playerScoreText = document.querySelector('.playerscore');
const computerScoreText = document.querySelector('.computerscore');
const computerPick = document.querySelector('#computerweapon');

function checkScore() {
    if (playerScore === 5) {
        playGame = false;
        const para = document.createElement('p');
        para.classList.add('parawin');
        history.prepend(para);
        para.textContent = "Congratulations! You win!";
        disableButtons();
    }
    else if (computerScore === 5) {
        playGame = false;
        const para = document.createElement('p');
        para.classList.add('paralose')
        history.prepend(para);
        para.textContent = "Computer wins! Better luck next time.";
        disableButtons();
    }
};

function printScore(score) {
    const para = document.createElement('p');
    para.classList.add('para')
    history.prepend(para);
    para.textContent = score;
    playerScoreText.textContent = `You have ${playerScore} points`;
    computerScoreText.textContent = `Computer has ${computerScore} points`;
    checkScore();
};

const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    let score = playRound('rock');
    printScore(score);
});

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
    let score = playRound('paper');
    printScore(score);
});

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
    let score = playRound('scissors');
    printScore(score);
});

function playRound(player) {
    if (playGame === false) {
        return;
    }
    let computer = getComputerChoice();
    computerPick.textContent = computer.charAt(0).toUpperCase() + computer.slice(1);
    
    if (player === computer) {
        return("It's a draw!");
        }
        
    else if (player === "rock" && computer === "paper") {
        computerScore++;
        return("You lose! Paper beats Rock");
        }

    else if (player === "rock" && computer === "scissors") {
        playerScore++;
        return("You win! Rock beats Scissors");
        }

    else if (player === "paper" && computer === "rock") {
        playerScore++;
        return("You win! Paper beats Rock");
        }

    else if (player === "paper" && computer === "scissors") {
        computerScore++;
        return("You lose! Scissors beat Paper");
        }

    else if (player === "scissors" && computer === "rock") {
        computerScore++;
        return("You lose! Rock beats Scissors");
        }

    else if (player === "scissors" && computer === "paper") {
        playerScore++;
        return("You win! Scissors beat Paper");
        }

};