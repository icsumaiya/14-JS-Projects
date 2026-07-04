const inputField = document.getElementById('userInput');
const preview = document.getElementById('displayArea');

inputField.addEventListener('keyup', () => {
    const typedText = inputField.value;
    
    if (typedText.length > 0) {
        preview.innerText = typedText;
    } else {
        preview.innerText = "Type Something...";
    }
});