/* scissors > paper; paper > rock; rock > scissors
 *
 * - Get random number between 0-2 to represent R/P/S choice for computer
 * - Get user input to decide their choice
 * - Do logic to figure out which choice wins
 * - Update count of winner, do next round
 * - Repeat this until winner count is 5
 */

function getComputerChoice() {
  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }
}
