// generates computer choices using random numbers
function getComputerChoice() {
    // ranomly generates 0, 1, or 2 int
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
    }

    let compChoice; // initialize for use later in loop
    let compNum = getRandomInt();

    // assigns rock/paper/scissors choice based on random number generator
    if (compNum === 0) {
        compChoice = "rock";
    } else if (compNum === 1) {
        compChoice = "paper";
    } else if (compNum === 2) {
        compChoice = "scissors";
    } else {
        console.log("Computer Number Generator Broken");
    }

    return compChoice;
}

// defines logic of game, basically:
// - rock > scissors
// - paper > rock
// - scissors > paper
// - scissors == scissors
// - paper == paper
// - rock == rock
// then ++ score of who wins the round, return & console.log result
function playRound(playerInput) {
    // initialize for later
    let result;
    // define player and computer choice for processing
    let playerChoice = playerInput.toLowerCase();
    let compChoice = getComputerChoice();

    if (playerChoice === "rock" && compChoice === "paper") {
        result = "Computer wins, paper beats rock!";
        compScore++;
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && compChoice === "scissors") {
        result = "You win, rock beats scissors!";
        playerScore++;
        console.log(result);
        return result;
    } else if (playerChoice === "rock" && compChoice === "rock") {
        result = "Tie, you both chose rock!";
        console.log(result);
        return result;
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        result = "You win, scissors beats paper!";
        console.log(result);
        playerScore++;
        return result;
    } else if (playerChoice === "scissors" && compChoice === "scissors") {
        result = "Tie, you both chose scissors!";
        console.log(result);
        return result;
    } else if (playerChoice === "scissors" && compChoice === "rock") {
        result = "Computer wins, rock beats scissors!";
        console.log(result);
        compScore++;
        return result;
    } else if (playerChoice === "paper" && compChoice === "paper") {
        result = "Tie, you both chose paper!";
        console.log(result);
        return result;
    } else if (playerChoice === "paper" && compChoice === "scissors") {
        result = "Computer wins, paper beats rock!";
        console.log(result);
        compScore++;
        return result;
    } else if (playerChoice === "paper" && compChoice === "rock") {
        result = "You win, paper beats rock!";
        console.log(result);
        playerScore++;
        return result;
    } else {
        console.log("Hey, that's not allowed!");
    }
}

// play rounds of game until player or computer score is 5, then reset score
function game() {
    while (compScore <= 5 && playerScore <= 5) {
        playRound(prompt("Rock, Paper, or Scissors?"));
    }

    if (compScore >= 5) {
        compScore = 0;
        playerScore = 0;
        console.log("The computer has won the game!");
        return "The computer has won the game!";
    } else if (playerScore >= 5) {
        compScore = 0;
        playerScore = 0;
        console.log("You have won the game!");
        return "You have won the game!";
    } else {
        console.log("Why did you break my game? :(");
        return "Why did you break my game? :(";
    }
}

// initialize counters to keep score
let compScore = 0;
let playerScore = 0;

// launch game on load
game();
