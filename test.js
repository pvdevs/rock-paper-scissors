const buttons = document.querySelectorAll('button');

let playerChoice;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playerChoice)
    })

})