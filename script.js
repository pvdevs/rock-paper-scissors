function getPlayerChoice() {
    let playerChoice;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            console.log(playerChoice)
        })
    })
}
// isnt it better if i make this function as a anonymous function inside of const playerChoice?


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

function game() {

  /*  for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(); 
        const roundResult = playAround(playerSelection, computerSelection);
        console.log(roundResult);
    }   */
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice(); 
    const roundResult = playAround(playerSelection, computerSelection);
    console.log(roundResult);
}

game();