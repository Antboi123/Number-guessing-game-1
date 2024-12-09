let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let previousGuesses = [];
let attempts = 0;

document.getElementById('submit-guess').addEventListener('click', function() {
  let userGuess = Number(document.getElementById('guess-input').value);
  attempts++;

  if (userGuess < 1 || userGuess > 100) {
    document.getElementById('result-message').textContent = "Please enter a number between 1 and 100!";
    return;
  }

  previousGuesses.push(userGuess);
  document.getElementById('previous-guesses').textContent = "Previous guesses: " + previousGuesses.join(', ');

  if (userGuess === randomNumber) {
    document.getElementById('result-message').textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
    resetGame();
  } else if (userGuess < randomNumber) {
    document.getElementById('result-message').textContent = "Too low! Try again.";
  } else {
    document.getElementById('result-message').textContent = "Too high! Try again.";
  }
});

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  attempts = 0;
  document.getElementById('guess-input').value = '';
}




