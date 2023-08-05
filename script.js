function getPlayerChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerChoice = button.id;
                console.log(playerChoice);
                resolve(playerChoice); // Resolve the Promise with the selected choice
            });
        });
    });
}


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
        playerLifes -= 1;

    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "Player Wins";
        computerLifes -= 1;

    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "CPU Wins";
        playerLifes -= 1;


    } else if(playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "Player Wins";
        computerLifes -= 1;

    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "CPU Wins";
        playerLifes -= 1;


    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "Player Wins";
        computerLifes -= 1;

    }

    return roundResult;
}

async function game() {

    for(let i = 0; i < Infinity; i++) {
    const playerSelection = await getPlayerChoice();
    const computerSelection = getComputerChoice(); 
    const roundResult = playAround(playerSelection, computerSelection);
    console.log(roundResult);

    if(computerLifes <= 0) {
        console.log('You win!');
        break;
    }
    if(playerLifes <= 0) {
        console.log('You Lose!');
        break
    }

    console.log(computerLifes, playerLifes);
    }  
}

let playerLifes = 5;
let computerLifes = 5;
game();