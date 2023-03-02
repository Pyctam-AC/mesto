export class FormValidator {
  constructor (config, formElement) {
    this._inputSelector = config.inputSelector;
    this._invalidInputClass = config.invalidInputClass;
    this._formSubmitBtnSelector = config.formSubmitBtnSelector;
    this._disableFormBtnClass = config.disableFormBtnClass;
    this._formElement = formElement;
  }

  //рекация кнопки на валидность
  disableButton = (buttonElement, disableFormBtnClass) => {
    buttonElement.classList.add(disableFormBtnClass);
    buttonElement.disabled = true;
  };

  _enableButton = (buttonElement, disableFormBtnClass) => {
    buttonElement.classList.remove(disableFormBtnClass);
    buttonElement.disabled = false;
  };

  _toggleButtonState = (formSubmitBtnElement, disableFormBtnClass, btnState) => {
    if (btnState) {
      this.disableButton(formSubmitBtnElement, disableFormBtnClass, btnState);
    } else {
      this._enableButton(formSubmitBtnElement, disableFormBtnClass, btnState);
    };
  };

  //проверка валидности ввода данных
  _showInputError = (input, errorElement, invalidInputClass) => {
    input.classList.add(invalidInputClass);
    errorElement.textContent = input.validationMessage;
  };

  _hideInputError = (input, errorElement, invalidInputClass) => {
    input.classList.remove(invalidInputClass);
    errorElement.textContent = '';
  };

  _hasInvalidInput = (inputs) => {
    return inputs.some((inputVal) => !inputVal.validity.valid);
  };

  _checkInputValidyty = (input, errorElement, invalidInputClass) => {
    if (input.validity.valid) {
      this._hideInputError(input, errorElement, invalidInputClass);
    } else {
      this._showInputError(input, errorElement, invalidInputClass);
    }
  };

  _handleFormInput = (
    evt,
    form,
    invalidInputClass,
    formSubmitBtnElement,
    disableFormBtnClass,
    inputsPopup) => {
    const input = evt.target;
    const errorElement = form.querySelector(`.input-error-${input.name}`);
    this._checkInputValidyty (input, errorElement, invalidInputClass);
    const btnState = this._hasInvalidInput(inputsPopup);
    this._toggleButtonState(formSubmitBtnElement, disableFormBtnClass, btnState);
  }

  enableValidation () {
    const formSubmitBtnElement = this._formElement.querySelector(this._formSubmitBtnSelector);

    const inputsPopup = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputsPopup.forEach((input) => {
      input.addEventListener('input', (evt) =>
      this._handleFormInput (
        evt,
        this._formElement,
        this._invalidInputClass,
        formSubmitBtnElement,
        this._disableFormBtnClass,
        inputsPopup));
    });
  }
};
