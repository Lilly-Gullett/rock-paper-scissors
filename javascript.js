//Computer picks randomly between rock, paper, scissors, lizard, or Spock
const compArray =['rock', 'paper', 'scissors', 'lizard', 'Spock']

function computerSelection() {
    return compArray[Math.floor(Math.random() * compArray.length)]
}

let compWeapon = computerSelection()


//User picks rock, paper, scissors, lizard, or Spock
let userWeapon;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const lizard = document.querySelector('.lizard');
const spock = document.querySelector('.spock')
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

lizard.addEventListener('click', () => {
    userWeapon = 'lizard'
})

spock.addEventListener('click', () => {
    userWeapon = 'Spock'
})

//use if else statements to determine a winner
let winner;

function checkWinner() {
    if (userWeapon==='rock') {
        if (compWeapon==='rock') {
            winner='tie'
        } else if (compWeapon ==='paper') {
            winner = 'comp'
        } else if (compWeapon==='scissors') {
            winner = 'user'
        } else if (compWeapon === 'lizard') {
            winner = 'user'
        } else if (compWeapon === 'Spock') {
            winner = 'comp'
        }
    } else if (userWeapon ==='paper') {
        if (compWeapon==='rock') {
            winner='user'
        } else if (compWeapon==='paper') {
            winner = 'tie'
        } else if (compWeapon === 'scissors') {
            winner = 'comp'
        } else if (compWeapon === 'lizard') {
            winner = 'comp'
        } else if (compWeapon === 'Spock') {
            winner = 'user'
        }
    } else if (userWeapon==='scissors') {
        if (compWeapon==='rock') {
            winner='comp'
        } else if (compWeapon==='paper'){
            winner = 'user'
        } else if (compWeapon === 'scissors') {
            winner = 'tie'
        } else if (compWeapon === 'lizard') {
            winner = 'user'
        } else if (compWeapon === 'Spock') {
            winner = 'comp'
        }
    } else if (userWeapon ==='lizard') {
        if (compWeapon === 'rock') {
            winner = 'comp'
        } else if (compWeapon === 'paper') {
            winner = 'user'
        } else if (compWeapon === 'scissors') {
            winner = 'comp'
        }  else if (compWeapon === 'lizard') {
            winner = 'tie'
        } else if (compWeapon === 'Spock') {
            winner = 'user'
        }
    } else if (userWeapon ==='Spock') {
        if (compWeapon === 'rock') {
            winner = 'user'
        } else if (compWeapon === 'paper') {
            winner = 'comp'
        } else if (compWeapon === 'scissors') {
            winner = 'user'
        }  else if (compWeapon === 'lizard') {
            winner = 'comp'
        } else if (compWeapon === 'Spock') {
            winner = 'tie'
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
let compWins = 0;
let userWins = 0;
const compWinDisplay = document.querySelector('.loss')
const userWinDisplay = document.querySelector('.win')

function countWinner() {
    if (winner === 'comp') {
        return (++compWins);
    } else if (winner=== 'user') {
        return (++userWins);
    } else {
        return userWins;
        return compWins;
    }
}

function displayWinCounts() {
    compWinDisplay.textContent = compWins;
    userWinDisplay.textContent = userWins;
}

displayWinCounts()

//Put it all together
for (let i= 0; i < button.length;i++) {
    button[i].addEventListener("click", () => {
        checkWinner();
        displayWinner();
        countWinner();
        displayWinCounts();
        compWeapon = computerSelection();
    })
}