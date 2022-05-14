const user=document.getElementById('userName');
const email=document.getElementById('userEmail');
const message=document.getElementById('userMessage');
const form=document.getElementById('form')

function storeData() {
    const dataUser = {
        user: user.value,
        email: email.value,
        message: message.value,
      };
    localStorage.setItem('login', JSON.stringify(dataUser));
}

form.addEventListener('submit', storeData);

function inputValues() {
    const formData = JSON.parse(localStorage.getItem('login'));
    if (formData !== null) {
      user.value = formData.user;
      email.value = formData.email;
      message.value = formData.message;
    }
  }
  
  window.addEventListener('load', inputValues);


