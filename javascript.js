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
const button = document.querySelectorAll('button');

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
let winner;

for (let i= 0; i < button.length;i++) {
    button[i].addEventListener("click", () => {
        checkWinner();
        console.log(winner)
    })
}


function checkWinner() {
    if (userWeapon==='rock'){
        if (compWeapon==='rock') {
            winner='tie'
        } else if (compWeapon ==='scissors') {
            winner = 'user'
        } else if (compWeapon==='paper') {
            winner = 'comp'
        }
    } else if (userWeapon ==='paper'){
        if (compWeapon==='paper') {
            winner='tie'
        } else if (compWeapon==='rock') {
            winner = 'user'
        } else if (compWeapon === 'scissors') {
            winner = 'comp'
        }
    } else if (userWeapon==='scissors'){
        if (compWeapon==='scissors') {
            winner='tie'
        } else if (compWeapon==='paper'){
            winner = 'user'
        } else if (compWeapon === 'rock') {
            winner = 'comp'
        }
    }
}




//display a message in .win-loss-message to show winner

//display win-loss count in .win-loss-count