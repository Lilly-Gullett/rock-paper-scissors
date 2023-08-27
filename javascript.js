//Computer picks randomly between rock, paper or scissors
const compArray =["rock", "paper", "scissors"]

function computerSelection() {
    return compArray[Math.floor(Math.random() * compArray.length)]
}

let compWeapon = computerSelection()

console.log(compWeapon)

//User picks rock, paper, or scissors
let userWeapon;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    userWeapon = 'rock';
    console.log(userWeapon)
} )

paper.addEventListener('click', () => {
    userWeapon = 'paper';
    console.log(userWeapon)
} )

scissors.addEventListener('click', () => {
    userWeapon = 'scissors';
    console.log(userWeapon)
} )


//use if else statements to determine a winner

//display a message in .win-loss-message to show winner

//display win-loss count in .win-loss-count