export default class FormValidator {
  constructor (validationConfig, formElement) {
    this._inputSelector = validationConfig.inputSelector;
    this._invalidInputClass = validationConfig.invalidInputClass;
    this._disableFormBtnClass = validationConfig.disableFormBtnClass;
    this._inputErrorClassTemplate = validationConfig.inputErrorClassTemplate;
    this._formElement = formElement;
    this._formSubmitBtnElement = this._formElement.querySelector(validationConfig.formSubmitBtnSelector);
    this._inputsPopup = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._errorList = this._formElement.querySelectorAll('.error');

  }

  //рекация кнопки на валидность
  _disableButton = () => {
    this._formSubmitBtnElement.classList.add(this._disableFormBtnClass);
    this._formSubmitBtnElement.disabled = true;
  };

  _enableButton = () => {
    this._formSubmitBtnElement.classList.remove(this._disableFormBtnClass);
    this._formSubmitBtnElement.disabled = false;
  };

  _toggleButtonState = () => {
    if (this._isButtonDisabled) {
      this._disableButton()
    } else {
      this._enableButton();
    };
  };

    //проверка валидности ввода данных
  _showInputError = () => {
    this._input.classList.add(this._invalidInputClass);
    this._errorElement.textContent = this._input.validationMessage;
  };

  _hideInputError = () => {
    this._inputsPopup.forEach((input) => {
      input.classList.remove(this._invalidInputClass);
    });
    this._errorList.forEach((error) => {
      error.textContent = '';
    });
  };

  //сброс ошибок валидности
  resetValidation() {
    this._disableButton();
    this._hideInputError ();
  }

  _hasInvalidInput = () => {
    return this._inputsPopup.some((inputVal) => !inputVal.validity.valid);
  };

   _checkInputValidity = () => {
    if (this._input.validity.valid) {
      this._hideInputError();
    } else {
      this._showInputError();
    }
  };

  _handleFormInput = (evt) => {
    this._input = evt.target;
    this._errorElement = this._formElement.querySelector(`${this._inputErrorClassTemplate}${this._input.name}`);
    this._checkInputValidity ();
    this._isButtonDisabled = this._hasInvalidInput();
    this._toggleButtonState();
  }

  enableValidation () {
      this._inputsPopup.forEach((input) => {
        input.addEventListener('input', (evt) =>
          this._handleFormInput (evt));
    });
  }
};
