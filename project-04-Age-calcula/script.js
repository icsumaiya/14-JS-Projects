function calculateAge() {
    const dobValue = document.getElementById('dobInput').value;
    const resultBox = document.getElementById('resultDisplay');

    if (!dobValue) {
        resultBox.innerText = "Select your accurate date of birth!";
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    let yearsDifference = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        yearsDifference--;
    }

    resultBox.innerText = `Now, you are: ${yearsDifference} years old!!!`;
}