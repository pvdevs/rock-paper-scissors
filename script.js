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
    const options = ["Rock","Paper","Scissors"];

    const index = Math.floor(Math.random() * options.length);

    return options[index];
}

function playAround(playerSelection, computerSelection) {
    let roundResult;

    if(playerSelection == computerSelection) {   
        roundResult = "Tie";

    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        roundResult = "CPU Wins";
        playerLifes -= 1;

    } else if(playerSelection == "Rock" && computerSelection == "SCISSORS") {
        roundResult = "Player Wins";
        computerLifes -= 1;

    } else if(playerSelection == "Paper" && computerSelection == "SCISSORS") {
        roundResult = "CPU Wins";
        playerLifes -= 1;


    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        roundResult = "Player Wins";
        computerLifes -= 1;

    } else if(playerSelection == "SCISSORS" && computerSelection == "Rock") {
        roundResult = "CPU Wins";
        playerLifes -= 1;


    } else if(playerSelection == "SCISSORS" && computerSelection == "Paper") {
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

    const div = document.querySelector('.cpu-card-inner');
    div.setAttribute('style','transform: rotateY(180deg);');

    const unflipCard = setTimeout(() => {
        div.setAttribute('style','transform: rotateY(0deg);');
    }, '1500');

    const h1 = document.getElementById('cpu-choice') ;
    h1.textContent = computerSelection;

    
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

    unflipCard();
}

let playerLifes = 5;
let computerLifes = 5;
game();