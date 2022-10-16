const buttonSend = document.getElementById('send-button');
const check = document.getElementById('agreement');
const count = document.getElementById('counter');
const textArea = document.getElementById('textarea');

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

const countCharacteres = () => {
  const characteres = textArea.value.length;
  const counter = 500 - characteres;
  count.textContent = `${counter}/500`;
};

window.onload = () => {
  check.addEventListener('change', submitForm);
  textArea.addEventListener('input', countCharacteres);
  buttonSend.addEventListener('click', alertNotify);
};
