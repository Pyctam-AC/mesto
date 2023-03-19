import Popup from './Popup.js';
//import FormValidator from './FormValidator.js'
//import {validationConfig} from './constants/constant.js'

export default class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

  }

  _getInputValues () {
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _setEventListeners () {
    super._setEventListeners ();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit (this._getInputValues());

    });
  }

  open () {
    super.open()
    this._setEventListeners ()
  }

  close () {
    super.close()
    this._form.reset();
  }
}
