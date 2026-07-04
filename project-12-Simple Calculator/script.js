function calculate(operation) {
    const val1 = parseFloat(document.getElementById('num1').value);
    const val2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('resultBox');
    
    let answer;

    switch(operation) {
        case 'add':
            answer = val1 + val2;
            break;
        case 'subtract':
            answer = val1 - val2;
            break;
        case 'multiply':
            answer = val1 * val2;
            break;
        case 'divide':
            answer = val2 !== 0 ? (val1 / val2) : "Error: Zero Division";
            break;
        default:
            answer = 0;
    }
    
    output.innerText = `Result: ${answer}`;
}