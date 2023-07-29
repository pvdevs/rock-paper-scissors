function getComputerChoice() {
    const options = ["rock","paper","scissors"];

    const index = Math.floor(Math.random() * options.length);

    return options[index];
}

function playAround(playerSelection, computerSelection) {
    let roundResult;

    if(playerSelection == computerSelection) {   
        roundResult = "Tie";

    } else if(playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "CPU Wins";

    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "Player Wins";

    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "CPU Wins";

    } else if(playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "Player Wins";

    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "CPU Wins";

    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "Player Wins";
    }

    return roundResult;
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playAround(playerSelection, computerSelection));