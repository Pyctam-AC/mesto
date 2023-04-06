import Popup from './Popup.js';

export default class PopupWithFormSubmit extends Popup {
  constructor (popupSelector, setElementData) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._setElementData = setElementData
  }

   setDataCard (elemenCard) {
    return this._elementCard = elemenCard;
  }

/*  _setElementData () {
    this._api.deleteCard(this._idCard)
      .then(() => {
        this._elementCard.remove()
        this._elementCard = null
      })
      .catch((err) => {
        console.log(err);
      });
  } */

  setEventListeners () {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setElementData (this._elementCard);
    });
  }
}


