const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-message');


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};
console.log(error)
console.log(form)
const checkEmail = (e) => {
    const emailVal = email.value.trim();
    console.log(emailVal)
    if(email.value === ''){
        e.preventDefault();
        console.log("Your email is required");
        error.innerText = "Your email is required";
    }else if(email.value !== email.value.toLowerCase()) {
        e.preventDefault();
        console.log("Your email should be written in lower case.")
        error.innerText = "Your email should be written in lower case.";
    } 
}

form.addEventListener('submit', (e) => {
    console.log("click auch")
    checkEmail();

  });