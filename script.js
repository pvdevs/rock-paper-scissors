// Constants
const board = document.querySelector('.board')
const score = document.querySelector('.buttons .score');
const winner = document.querySelector('.winner')
const winnerText = document.querySelector('.winner h1')
const container = document.querySelector('.container');
const cpuCardInner = document.querySelector('.cpu-card-inner');
const cpuCardText = document.getElementById('cpu-choice') ;

// Game state variables
let playerPoints = 0;
let computerPoints = 0;

// Utility Functions
function getPlayerChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll('.buttons a');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerChoice = button.id;
                console.log(playerChoice);

                resolve(playerChoice);
            });
        });
    });
}

function getComputerChoice() {
    const options = ["Rock","Paper","Scissors"];
    const index = Math.floor(Math.random() * options.length);
    const selected = options[index];
//  The below line writes the CPU Choice in the back of the flipping card
    cpuCardText.textContent = selected;
    return selected;
}

function flipCard() {
    cpuCardInner.setAttribute('style','transform: rotateY(180deg);');
    unflipCard();
}

function unflipCard(){
    setTimeout(() => {
    cpuCardInner.setAttribute('style','transform: rotateY(0deg);');
}, '1000');
}

function getPoint(target) {
    if(target === 'tie') {
        container.classList.add('tie');
        console.log(`${target}`);
    } else if(target === 'player') {
        container.setAttribute('style', 'border-left: solid #0029FF 80px;');
        console.log(`${target} won this round`);
        playerPoints++;
    } else if(target === 'cpu') {
        container.setAttribute('style', 'border-right: solid #0029FF 80px;');
        console.log(`${target} won this round`);
        computerPoints++;
    } indicatePointOut() 
}

function indicatePointOut() { setTimeout(() => {
    container.setAttribute('style', 'border-left: 0px;');
    container.setAttribute('style', 'border-right: 0px;');
    container.classList.remove('tie');
}, 1000) ;
}

function updateScore() {
    score.textContent = `${playerPoints} x ${computerPoints}`;
}

function getWinner(target){
    winnerText.innerText = `${target.toUpperCase()} WON!`;
    winner.classList.add('visible');
    board.classList.add('invisible');
    if(computerPoints === 5) winner.classList.add('computer-winner'); // This turns the screen into red
}

function playAround(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) getPoint('tie');
    else if(playerSelection === "Rock" && computerSelection === "Paper") getPoint('cpu');
    else if(playerSelection === "Rock" && computerSelection === "Scissors") getPoint('player');
    else if(playerSelection === "Paper" && computerSelection === "Scissors") getPoint('cpu');
    else if(playerSelection === "Paper" && computerSelection === "Rock") getPoint('player');
    else if(playerSelection === "Scissors" && computerSelection === "Rock") getPoint('cpu');
    else if(playerSelection === "Scissors" && computerSelection === "Paper") getPoint('player');
}

async function game() {
    for(let i = 0; i < Infinity; i++) {
        updateScore();

        const playerSelection = await getPlayerChoice();
        const computerSelection = getComputerChoice();         
        
        flipCard();
        playAround(playerSelection, computerSelection);

        if(playerPoints === 5) getWinner('player');
        else if(computerPoints === 5) getWinner('computer');
    }
}

// Event Listeners
const playAgain = document.querySelector('.winner h2');
playAgain.addEventListener('click', () => {
    game();
});

// Initialization
game();

