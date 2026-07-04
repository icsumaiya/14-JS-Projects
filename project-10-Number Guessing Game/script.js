let targetNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');
const feedback = document.getElementById('message');

checkBtn.addEventListener('click', () => {
    const playerGuess = parseInt(guessInput.value);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        feedback.innerText = "Please write a number 1 to 100";
    } else if (playerGuess > targetNumber) {
        feedback.innerText = "Too High! Try again.";
    } else if (playerGuess < targetNumber) {
        feedback.innerText = "Too Low! Try again.";
    } else {
        feedback.innerText = "Contratulations! Your catch the right answer.";
        feedback.style.color = "green";
    }
});