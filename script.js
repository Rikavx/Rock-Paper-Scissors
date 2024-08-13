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

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        }
        //rock vs. paper
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            ++computerScore;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            ++humanScore;
        }
        //rock vs. scissors
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            ++humanScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            ++computerScore;
        }
        //paper vs. scissors
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            ++computerScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            ++humanScore;
        }
        else {
            console.log("Wrong code?")
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    //run 5 times
    for (let i = 0; i < 5; ++i) { 
        playRound(humanSelection, computerSelection);
        if (i < 4) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        }
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else {
        console.log("You lose :(");
    }
}

playGame();