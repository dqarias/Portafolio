document.getElementById('form').addEventListener('submit', (event) => {
const email = document.getElementById('email').value;
if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('error-message');
    emailError.classList.add('active');
}
});