console.log("Welcome to the game")

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerchoice = choice[randomIndex].toLowerCase();
    return computerchoice;
}

function userInput(){
    const validInputs = ['rock' , 'paper' ,'scissors'];
    const input = prompt("Enter: Rock | Paper | Scissors").toLowerCase();

    if(!validInputs.includes(input)){
        return `an invalid input: ${input}. Please enter rock, paper or scissors`;
    }else{
        return input
    }
}

function playGround(userSelection, computerSelection){
    //Check for a tie
    if(userSelection == computerSelection){
        return `You both selected ${computerSelection}. It is a tie`
    }else if( userSelection == 'rock'){  // check between Rock and Scissors
        if(computerSelection == 'scissors'){
            return `${userSelection} smashes ${computerSelection} you win!`;
        } else {
            return `Paper covers ${userSelection}, You lose!`;
        }
    }else if( userSelection == 'paper'){ // check between Paper and Rock
        if(computerSelection == 'rock'){
            return `${userSelection} covers ${computerSelection} you win!`;
        } else {
            return `Scissors cuts ${userSelection}, You lose!`;
        }
    }else if( userSelection == 'scissors'){ // check between Scissor and Paper
        if(computerSelection == 'paper'){
            return `${userSelection} cuts ${computerSelection} you win!`;
        } else {
            return `Rock smashes ${userSelection}, You lose!`;
        }
    }
}


const playerSelection = userInput();
const computerSelection = getComputerChoice();
console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}`);
console.log(playGround(playerSelection,computerSelection));
