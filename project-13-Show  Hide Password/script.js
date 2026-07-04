const secretField = document.getElementById('secretField');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    const isPassword = secretField.type === 'password';
    
    secretField.type = isPassword ? 'text' : 'password';
    toggleBtn.innerText = isPassword ? 'Hide' : 'Show';
});