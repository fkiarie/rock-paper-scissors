console.log("Welcome to the game")

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
function playGround(userSelection, computerSelection){
    //Check for a tie
    if(userSelection == computerSelection){
        console.log(`You both selected ${computerSelection}. It is a tie`);
    }else if( userSelection == 'rock'){  // check between Rock and Scissors
        if(computerSelection == 'scissors'){
            console.log(`${userSelection} smashes ${computerSelection} you win!`);
        } else {
            console.log(`Paper covers ${userSelection}, You lose!`);
        }
    }else if( userSelection == 'paper'){ // check between Paper and Rock
        if(computerSelection == 'rock'){
            console.log(`${userSelection} covers ${computerSelection} you win!`);
        } else {
            console.log(`Scissors cuts ${userSelection}, You lose!`);
        }
    }else if( userSelection == 'scissors'){ // check between Scissor and Paper
        if(computerSelection == 'paper'){
            console.log(`${userSelection} cuts ${computerSelection} you win!`);
        } else {
            console.log(`Rock smashes ${userSelection}, You lose!`);
        }
    }
}

userInputButtons();
