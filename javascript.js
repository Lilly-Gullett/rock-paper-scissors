//Computer picks randomly between rock, paper or scissors
const compArray =["rock", "paper", "scissors"]

function computerSelection() {
    return compArray[Math.floor(Math.random() * compArray.length)];
}

let compWeapon = computerSelection()

console.log(compWeapon)

//User picks rock, paper, or scissors

//use if else statements to determine a winner

//display a message in .win-loss-message to show winner

//display win-loss count in .win-loss-count