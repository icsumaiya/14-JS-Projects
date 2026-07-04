const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

//increment
incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

//decrement
decrementBtn.addEventListener('click', () => {
    count--;
    counterDisplay.innerText = count;
});

//reset
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});