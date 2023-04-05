import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonAddPopup = this._form.querySelector('.popup__add-button');
  }

  _getInputValues () {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  renderLoading = (isLoading) => {
    if (isLoading) {
      this._buttonAddPopup.textContent = 'Сохранение...'}
    else {
      this._buttonAddPopup.textContent = 'Сохранить'
    }
  }

  setEventListeners () {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
//      this.renderLoading(true);
      this._handleFormSubmit (this._getInputValues());
      this.close();

    });
  }

  setInputValues (data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  close () {
    super.close()
    this._form.reset();
  }
}
