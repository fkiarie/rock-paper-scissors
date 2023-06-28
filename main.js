console.log("Welcome to the game")

let playerScore = 0;
let computerScore = 0;
const messageContainer = document.getElementById("messageContainer");

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerchoice = choice[randomIndex].toLowerCase();
    return computerchoice;
}


function userInputButtons(){
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    

    rockButton.addEventListener("click", function(){
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice();
        playGround(playerSelection,computerSelection);
    });
    paperButton.addEventListener("click", function(){
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        playGround(playerSelection,computerSelection);
    });
    scissorsButton.addEventListener("click", function(){
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice();
        playGround(playerSelection,computerSelection);
    });
}
function announceWinner() {
  if (playerScore === 5) {
    displayMessage("Congratulations! You won the game!");
    resetGame();
  } else if (computerScore === 5) {
    displayMessage("You lost the game. Better luck next time!");
    resetGame();
  }
}
function displayMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function playGround(userSelection, computerSelection) {
  // Check for a tie
  if (userSelection === computerSelection) {
    displayMessage(`You both selected ${computerSelection}. It's a tie!`);
  } else if (userSelection === 'rock') {  // check between Rock and Scissors
    if (computerSelection === 'scissors') {
      displayMessage(`${userSelection} smashes ${computerSelection}. You win!`);
      playerScore++;
    } else {
      displayMessage(`Paper covers ${userSelection}. You lose!`);
      computerScore++;
    }
  } else if (userSelection === 'paper') { // check between Paper and Rock
    if (computerSelection === 'rock') {
      displayMessage(`${userSelection} covers ${computerSelection}. You win!`);
      playerScore++;
    } else {
      displayMessage(`Scissors cuts ${userSelection}. You lose!`);
      computerScore++;
    }
  } else if (userSelection === 'scissors') { // check between Scissor and Paper
    if (computerSelection === 'paper') {
      displayMessage(`${userSelection} cuts ${computerSelection}. You win!`);
      playerScore++;
    } else {
      displayMessage(`Rock smashes ${userSelection}. You lose!`);
      computerScore++;
    }
  }

  displayMessage(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
  announceWinner();
}

userInputButtons();
