const btn = document.getElementById('calculateBtn');
const displayArea = document.getElementById('outputDisplay');

btn.addEventListener('click', () => {
    const bng = parseFloat(document.getElementById('bangla').value);
    const eng = parseFloat(document.getElementById('english').value);
    const mth = parseFloat(document.getElementById('math').value);

    const total = bng + eng + mth;
    const average = total / 3;

    let grade = "";
    if (average >= 80) grade = "A+";
    else if (average >= 70) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 40) grade = "C";
    else grade = "F";

    displayArea.innerText = `Total: ${total}, Average: ${average.toFixed(2)}, Grade: ${grade}`;
});