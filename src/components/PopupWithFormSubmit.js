import Popup from './Popup.js';

export default class PopupWithFormSubmit extends Popup {
  constructor (popupSelector, api) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._api = api
  }

  setDataCard (cardElement, id) {
    this._elementCard = cardElement;
    this._idCard = id
  }

  _setElementData () {
    this._api.deleteCard(this._idCard)
      .then(() => {
        this._elementCard.remove()
        this._elementCard = null
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setEventListeners () {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setElementData ();
    });
  }
}


