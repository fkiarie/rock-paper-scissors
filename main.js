console.log("Welcome to the game")

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerchoice = choice[randomIndex];
    return computerchoice;

}

function playGround(userSelection, computerSelection){
    //Check for a tie
    if(userSelection == computerSelection){
        return `You both selected ${computerSelection}. It is a tie`
    }else if( userSelection == 'Rock'){  // check between Rock and Scissors
        if(computerSelection == 'Scissors'){
            return `${userSelection} smashes ${computerSelection} you win!`;
        } else {
            return `Paper covers ${userSelection}, You lose!`;
        }
    }else if( userSelection == 'Paper'){ // check between Paper and Rock
        if(computerSelection == 'Rocks'){
            return `${userSelection} covers ${computerSelection} you win!`;
        } else {
            return `Scissors cuts ${userSelection}, You lose!`;
        }
    }else if( userSelection == 'Scissors'){ // check between Scissor and Paper
        if(computerSelection == 'Paper'){
            return `${userSelection} cuts ${computerSelection} you win!`;
        } else {
            return `Rock smashes ${userSelection}, You lose!`;
        }
    }
}

const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();
console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}`);
console.log(playGround(playerSelection,computerSelection));
