document.getElementById('form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('error-message');
    emailError.innerText = 'Email should be in lower case';
    emailError.classList.add('active');
  }
});