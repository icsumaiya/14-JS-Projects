const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');
const codeDisplay = document.getElementById('cssCode');

function updateBackground() {
    const gradientValue = `linear-gradient(to right, ${c1.value}, ${c2.value})`;
    
    document.body.style.background = gradientValue;
    codeDisplay.innerText = `background: ${gradientValue};`;
}

c1.addEventListener('input', updateBackground);
c2.addEventListener('input', updateBackground);