let seconds = 0;
let intervalId = null;

const display = document.getElementById('timeDisplay');

function startTimer() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            seconds++;
            display.innerText = seconds;
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    display.innerText = seconds;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);