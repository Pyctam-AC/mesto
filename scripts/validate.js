//рекация кнопки на валидность
const disableButton = (buttonElement, disableFormBtnClass) => {
  buttonElement.classList.add(disableFormBtnClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, disableFormBtnClass) => {
  buttonElement.classList.remove(disableFormBtnClass);
  buttonElement.disabled = false;
};

const toggleButtonState = (formSubmitBtnElement, disableFormBtnClass, btnState) => {
  if (btnState) {
    disableButton(formSubmitBtnElement, disableFormBtnClass, btnState);
  } else {
    enableButton(formSubmitBtnElement, disableFormBtnClass, btnState);
  };
};

//проверка валидности ввода данных
const showInputError = (input, errorElement, invalidInputClass) => {
  input.classList.add(invalidInputClass);
  errorElement.textContent = input.validationMessage;
};

const hideInputError = (input, errorElement, invalidInputClass) => {
  input.classList.remove(invalidInputClass);
  errorElement.textContent = '';
};

const checkInputValidyty = (input, errorElement, invalidInputClass) => {
  if (input.validity.valid) {
    hideInputError(input, errorElement, invalidInputClass);
  } else {
    showInputError(input, errorElement, invalidInputClass);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((inputVal) => !inputVal.validity.valid);
};

const handleFormInput = (
  evt,
  form,
  invalidInputClass,
  formSubmitBtnElement,
  disableFormBtnClass,
  inputsPopup) => {
  const input = evt.target;
  const errorElement = form.querySelector(`.input-error-${input.name}`);
  checkInputValidyty (input, errorElement, invalidInputClass);
  const btnState = hasInvalidInput(inputsPopup);
  toggleButtonState(formSubmitBtnElement, disableFormBtnClass, btnState);
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
}

//функция запуска валидации
const enableValidation = ({config}) => {

  const formsPopup = Array.from(document.querySelectorAll(config.formSelector));
  formsPopup.forEach((form) => {
    form.addEventListener('submit', handleFormSubmit);

    const formSubmitBtnElement = form.querySelector(config.formSubmitBtnSelector);

    const inputsPopup = Array.from(form.querySelectorAll(config.inputSelector));
    inputsPopup.forEach((input) => {
      input.addEventListener('input', (evt) =>
      handleFormInput (evt, form, config.invalidInputClass, formSubmitBtnElement, config.disableFormBtnClass, inputsPopup));
    });
  });
};

enableValidation({config});
