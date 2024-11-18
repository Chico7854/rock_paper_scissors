function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10) % 3;
    let result;

    switch(computerChoice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }

    console.log(`Computer choice: ${result}`)

    return result;
}

function getHumanChoice() {
    let humanChoice = prompt("Choice: ").toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        getHumanChoice();
    }
    else {
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "draw"; // Both choices are the same
    }

    const winningCombinations = {
        rock: "scissors",   // Rock beats scissors
        paper: "rock",      // Paper beats rock
        scissors: "paper",  // Scissors beats paper
    };

    if (winningCombinations[humanChoice] === computerChoice) {
        return "human"; // Human wins
    } else {
        return "computer"; // Computer wins
    }
}

function declareWinner(humanScore, computerScore) {
    if (humanScore === computerScore) {
        console.log ("Draw");
    } else if (humanScore < computerScore) {
        console.log ("Computer Won");
    } else {
        console.log ("You Won");
    }
}

const playerOptions = document.querySelector("#playerOptions");

playerOptions.addEventListener("click", (event) => {
    let target = event.target;
    let winner = playRound(target.textContent, getComputerChoice());
    console.log(winner);
});