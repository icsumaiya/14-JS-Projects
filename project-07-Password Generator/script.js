const passwordOutput = document.getElementById('passwordOutput');
const generateBtn = document.getElementById('generateBtn');

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

function createSecurePassword() {
    let newPassword = "";
    const length = 12;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars[randomIndex];
    }
    passwordOutput.value = newPassword;
}
generateBtn.addEventListener('click', createSecurePassword);