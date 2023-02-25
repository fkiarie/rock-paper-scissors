console.log("Welcome to the game")

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerchoice = choice[randomIndex];
    return computerchoice;

}

function playGround(userSelection, computerSelection){
    // refine input
    const lUserSelection = userSelection.toLowerCase();
    const lComputerSelection = computerSelection.toLowerCase();
    //console.log(`user: ${lUserSelection} computer: ${lComputerSelection}`);

    //Check for a tie
    if(lUserSelection == lComputerSelection){
        return `You both selected ${lComputerSelection}. It is a tie`
    }else if( lUserSelection == 'rock'){  // check between Rock and Scissors
        if(lComputerSelection == 'scissors'){
            return `${lUserSelection} smashes ${lComputerSelection} you win!`;
        } else {
            return `Paper covers ${lUserSelection}, You lose!`;
        }
    }else if( lUserSelection == 'paper'){ // check between Paper and Rock
        if(lComputerSelection == 'rock'){
            return `${lUserSelection} covers ${lComputerSelection} you win!`;
        } else {
            return `Scissors cuts ${lUserSelection}, You lose!`;
        }
    }else if( lUserSelection == 'scissors'){ // check between Scissor and Paper
        if(lComputerSelection == 'paper'){
            return `${lUserSelection} cuts ${lComputerSelection} you win!`;
        } else {
            return `Rock smashes ${lUserSelection}, You lose!`;
        }
    }
}

const playerSelection = 'PAper';
const computerSelection = getComputerChoice();
console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}`);
console.log(playGround(playerSelection,computerSelection));
