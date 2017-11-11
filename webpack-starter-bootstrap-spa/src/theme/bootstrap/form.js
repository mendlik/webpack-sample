import './form.global.scss';

const validateForm = (form, event) => {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
};

const registerFormsValidation = () => {
  const forms = document.querySelectorAll('form.validate');
  forms.forEach((form) => {
    form.addEventListener('submit', event => validateForm(form, event), false);
  });
};

window.addEventListener('load', () => registerFormsValidation(), false);
