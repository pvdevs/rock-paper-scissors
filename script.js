function getComputerChoice() {
    const options = ["rock","paper","scissors"];

    const index = Math.floor(Math.random() * options.length);

    return options[index];
}

function playAround(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        console.log("tie");
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("CPU Wins");
    } else {
        console.log("Player Wins");
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playAround(playerSelection, computerSelection));


