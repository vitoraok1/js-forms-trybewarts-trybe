const buttonSend = document.getElementById('send-button');

const check = document.getElementById('agreement');

const login = {
  email: 'tryber@teste.com',
  password: '123456',
};

const alertNotify = (button) => {
  button.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === login.email && password === login.password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const submitForm = () => {
  const sendButton = document.getElementById('submit-btn');
  const terms = document.getElementById('agreement');
  sendButton.disabled = !terms.checked;
};

window.onload = () => {
  check.addEventListener('change', submitForm);
};

buttonSend.addEventListener('click', alertNotify);
