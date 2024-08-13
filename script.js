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

