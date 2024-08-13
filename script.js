function getComputerChoice() {
    let random = Math.random();
    let compChoice;

    if (random >= 0 && random <= 0.3) {
        compChoice = "rock";
    }
    else if (random > 0.3 && random <= 0.6 ) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");

    humanChoice = humanChoice.toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Try again")
        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;