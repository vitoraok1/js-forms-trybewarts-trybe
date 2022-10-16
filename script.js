const buttonSend = document.getElementById('send-button');
const check = document.getElementById('agreement');
const count = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

const el = form.elements;

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

const checkFormValidation = () => {
  const sendButton = document.getElementById('submit-btn');
  const terms = document.getElementById('agreement');
  sendButton.disabled = !terms.checked;
};

const countCharacteres = () => {
  const characteres = textArea.value.length;
  const counter = 500 - characteres;
  count.textContent = `${counter}/500`;
};

const formatText = (first, subject) => (first ? subject : `, ${subject}`);

const subjectsArr = () => {
  const subjects = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  let str = '';
  let first = true;
  for (let i = 0; i < subjects.length; i += 1) {
    if (el[subjects[i].toLowerCase()].checked) {
      str += formatText(first, subjects[i]);
      first = false;
    }
  }
  return str;
};

const getFormValues = () => {
  const formValues = {
    name: `Nome: ${el.name.value} ${el.lastName.value}`,
    email: `Email: ${el.email.value}`,
    house: `Casa: ${el.house.value}`,
    family: `Família: ${el.family.value}`,
    subjects: `Matérias: ${subjectsArr()}`,
    rate: `Avaliação: ${el.rate.value}`,
    comments: `Observações: ${el.comments.value}`,
  };
  return formValues;
};

const insertText = (id) => {
  document.getElementById(`${id}Value`).innerText = getFormValues()[`${id}`];
};

const submitForm = () => {
  const formValues = getFormValues();
  form.hidden = true;
  formData.hidden = false;
  Object.keys(formValues).forEach((id) => {
    insertText(id);
  });
};

window.onload = () => {
  check.addEventListener('change', checkFormValidation);
  textArea.addEventListener('input', countCharacteres);
  buttonSend.addEventListener('click', alertNotify);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitForm();
  });
};

// Ultimo commit
