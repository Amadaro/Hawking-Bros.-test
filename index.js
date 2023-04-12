let form = document.querySelector('.validateForm'),
  formInputs = document.querySelectorAll('.textInput'),
  inputPassword = document.querySelector('.passwordInput'),
  inputChecbox = document.querySelector('.inputCheckBox');

function handleFormSubmit(event) {
  event.preventDefault();
}

function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm(applicantForm);
}

function serializeForm(formNode) {
  return new JSON(formNode);
}

const applicantForm = document.getElementById('add-form');
applicantForm.addEventListener('submit', handleFormSubmit);

form.onsubmit = function () {
  let passVal = inputPassword.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (passVal.length <= 4 || passVal.length > 12) {
    console.log('Пароль должен содержать от 4 до 12 символов');
    inputPassword.classList.add('error');
    return false;
  } else {
    inputPassword.classList.remove('error');
  }

  if (!inputChecbox.checked) {
    console.log('Не поставили галочку');

    inputChecbox.classList.add('error');
    return false;
  } else {
    inputChecbox.classList.remove('error');
  }

  return alert(serializeForm);
};
