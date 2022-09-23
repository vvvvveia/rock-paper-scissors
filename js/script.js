/*
 *
 * - Get random number between 0-2 to represent R/P/S choice for computer
 * - Get user input to decide their choice
 * - Do logic to figure out which choice wins
 * - Update count of winner, do next round
 * - Repeat this until winner count is 5
 */

// Initialize counters to keep score
let compScore = 0;
let playerScore = 0;

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

function playRound(playerInput) {
    // initialize for later
    let result;
    // define player and computer choice for processing
    let playerChoice = playerInput.toLowerCase();
    let compChoice = getComputerChoice();

    /* rock > scissors
     * paper > rock
     * scissors > paper
     * scissors === scissors
     * paper === paper
     * rock === rock
     * 
     * ++ the score of who wins the round
     */
    if (playerChoice === "rock" && compChoice === "paper") {
        result = "Computer wins, paper beats rock!";
        compScore++;
        return result;
    } else if (playerChoice === "rock" && compChoice === "scissors") {
        result = "You win, rock beats scissors!";
        playerScore++;
        return result;
    } else if (playerChoice === "rock" && compChoice === "rock") {
        result = "Tie, you both chose rock!";
        return result;
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        result = "You win, rock beats paper!";
        playerScore++;
        return result;
    } else if (playerChoice === "scissors" && compChoice === "scissors") {
        result = "Tie, you both chose scissors!";
        return result;
    } else if (playerChoice === "scissors" && compChoice === "rock") {
        result = "Computer wins, rock beats scissors!";
        compScore++;
        return result;
    } else if (playerChoice === "paper" && compChoice === "paper") {
        result = "Tie, you both chose paper!";
        return result;
    } else if (playerChoice === "paper" && compChoice === "scissors") {
        result = "Computer wins, paper beats rock!";
        compScore++;
        return result;
    } else if (playerChoice === "paper" && compChoice === "rock") {
        result = "You win, paper beats rock!";
        playerScore++;
        return result;
    } else {
        console.log("Damn son, where'd you find this?");
    }
}
