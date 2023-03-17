export default class FormValidator {
  constructor (validationConfig, formElement) {
    this._inputSelector = validationConfig.inputSelector;
    this._invalidInputClass = validationConfig.invalidInputClass;
    this._formSubmitBtnSelector = validationConfig.formSubmitBtnSelector;
    this._disableFormBtnClass = validationConfig.disableFormBtnClass;
    this._inputErrorClassTemplate = validationConfig.inputErrorClassTemplate;
    this._formElement = formElement;
  }

  //рекация кнопки на валидность
  disableButton = () => {
    this._formSubmitBtnElement.classList.add(this._disableFormBtnClass);
    this._formSubmitBtnElement.disabled = true;
  };

  _enableButton = () => {
    this._formSubmitBtnElement.classList.remove(this._disableFormBtnClass);
    this._formSubmitBtnElement.disabled = false;
  };

  _toggleButtonState = () => {
    if (this._isButtonDisabled) {
      this.disableButton()
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
    this._input.classList.remove(this._invalidInputClass);
    this._errorElement.textContent = '';
  };

  _hasInvalidInput = (inputsPopup) => {
    return inputsPopup.some((inputVal) => !inputVal.validity.valid);
  };

   _checkInputValidity = () => {
    if (this._input.validity.valid) {
      this._hideInputError();
    } else {
      this._showInputError();
    }
  };

  _handleFormInput = (evt, inputsPopup) => {
    this._input = evt.target;
    this._errorElement = this._formElement.querySelector(`${this._inputErrorClassTemplate}${this._input.name}`);
    this._checkInputValidity ();
    this._isButtonDisabled = this._hasInvalidInput(inputsPopup);
    this._toggleButtonState();
  }

  enableValidation () {
    this._formSubmitBtnElement = this._formElement.querySelector(this._formSubmitBtnSelector);

    const inputsPopup = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputsPopup.forEach((input) => {
      input.addEventListener('input', (evt) =>
        this._handleFormInput (evt, inputsPopup));
    });
  }
};
