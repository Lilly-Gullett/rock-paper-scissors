//Computer picks randomly between rock, paper or scissors
const compArray =["rock", "paper", "scissors"]

function computerSelection() {
    return compArray[Math.floor(Math.random() * compArray.length)]
}

let compWeapon = computerSelection()


//User picks rock, paper, or scissors
let userWeapon;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const button = document.querySelectorAll('button');

rock.addEventListener('click', () => {
    userWeapon = 'rock'
} )

paper.addEventListener('click', () => {
    userWeapon = 'paper'
} )

scissors.addEventListener('click', () => {
    userWeapon = 'scissors'
} )


//use if else statements to determine a winner
let winner;

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
const para = document.querySelector('.win-loss-message')

function proper(word) {
    let w = word.charAt(0).toUpperCase();
    let ord = word.slice(1);
    return w+ord
}

function displayWinner() {
    if (winner==='comp') {
        para.textContent = `${(proper(compWeapon))} beats ${userWeapon}. Computer wins.`
    } else if (winner==='tie') {
        para.textContent = `You both picked ${userWeapon}. There are no winners today...`
    } else if (winner==='user') {
        para.textContent = `${(proper(userWeapon))} beats ${compWeapon}! You win!`
    }
}

//display win-loss count in .win-loss-count


//Put it all together
for (let i= 0; i < button.length;i++) {
    button[i].addEventListener("click", () => {
        checkWinner();
        displayWinner();
        compWeapon = computerSelection();
    })
}