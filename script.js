function getPlayerChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll('.button-container h1');
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
    let body = document.querySelector('.container');
    let computerDamage = false;
    let playerDamage = false;

    const outlineOut = setTimeout(() => {
        body.setAttribute('style', 'border-left: 0px;')
        body.setAttribute('style', 'border-right: 0px;')
        body.classList.remove('tie')
    }, 1000) ;

    if(playerSelection == computerSelection) {   
        roundResult = "Tie";
        body.classList.add('tie')
        
        

    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        roundResult = "CPU Wins";
        playerLifes -= 1;
        playerDamage = true;
        body.setAttribute('style', 'border-right: solid #0029FF 80px;')
    } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
        roundResult = "Player Wins";
        computerLifes -= 1;
        computerDamage = true;
        body.setAttribute('style', 'border-left: solid #0029FF 80px;')



    } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
        roundResult = "CPU Wins";
        playerLifes -= 1;
        playerDamage = true;
        body.setAttribute('style', 'border-right: solid #0029FF 80px;')
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        roundResult = "Player Wins";
        computerLifes -= 1;
        computerDamage = true;
        body.setAttribute('style', 'border-left: solid #0029FF 80px;')



    } else if(playerSelection == "Scissors" && computerSelection == "Rock") {
        roundResult = "CPU Wins";
        playerLifes -= 1;
        playerDamage = true;
        body.setAttribute('style', 'border-right: solid #77e000 48px;')


    } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
        roundResult = "Player Wins";
        computerLifes -= 1;
        computerDamage = true;
        body.setAttribute('style', 'border-left: solid #77e000 48px;')


    }

    
    return roundResult;
    outlineOut();

}

async function game() {

    for(let i = 0; i < Infinity; i++) {

        const score = document.querySelector('.button-container p');
        score.textContent = `${playerLifes} x ${computerLifes}`

        const playerSelection = await getPlayerChoice();
        const computerSelection = getComputerChoice(); 
        const roundResult = playAround(playerSelection, computerSelection);
        console.log(roundResult);

        const div = document.querySelector('.cpu-card-inner');
        div.setAttribute('style','transform: rotateY(180deg);');

        //body.setAttribute('style', 'border-left: solid #0029FF 48px;')


        const unflipCard = setTimeout(() => {
            div.setAttribute('style','transform: rotateY(0deg);');
        }, '1000');






        const h1 = document.getElementById('cpu-choice') ;
        h1.textContent = computerSelection;

        const winner = document.querySelector('.winner')
        const board = document.querySelector('.board')

        const winnerText = document.querySelector('.winner h1')
    

        if(computerLifes <= 0) {
            console.log('You win!');
            winnerText.innerText = 'PLAYER WON!'
            winner.classList.add('visible')
            board.classList.add('invisible')
            break;
        }
        if(playerLifes <= 0) {
            console.log('You Lose!');
            winnerText.innerText = 'CPU WON!'
            winner.classList.add('visible')
            board.classList.add('invisible')
            break;
        }

        console.log(computerLifes, playerLifes);
        }  

   // outlineOut();
    unflipCard();
}


const playAgain = document.querySelector('.winner h2');
playAgain.addEventListener('click', () => {
    game();
});



let playerLifes = 5;
let computerLifes = 5;
game();
