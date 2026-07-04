const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    charCount.innerText = text.length;

    const words = text.trim().split(/\s+/);
    wordCount.innerText = text.trim() === "" ? 0 : words.length;
});