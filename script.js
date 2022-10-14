const buttonSend = document.getElementById('send-button');

const login = {
  email: 'tryber@teste.com',
  password: '123456',
};

function alertNotify(button) {
  console.log('teste');
  button.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === login.email && password === login.password) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonSend.addEventListener('click', alertNotify);
