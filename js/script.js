/* scissors > paper; paper > rock; rock > scissors
 *
 * - Get random number between 0-2 to represent R/P/S choice for computer
 * - Get user input to decide their choice
 * - Do logic to figure out which choice wins
 * - Update count of winner, do next round
 * - Repeat this until winner count is 5
 */

function getComputerChoice() {
  // makes number between 0-2
  function getRandomInt() {
    return Math.floor(Math.random() * 3); 
  }

  let compChoice; // initialize for use in if..else loop
  let compNum = getRandomInt();

  // assigns rock/paper/scissors choice based on random number generator
  if (compNum === 0) {
    compChoice = 'rock';
  } else if (compNum === 1) {
    compChoice = 'paper';
  } else if (compNum === 2) {
    compChoice = 'scissors';
  } else {
    console.log('Computer Number Generator Broken');
  }

  return compChoice;
}
