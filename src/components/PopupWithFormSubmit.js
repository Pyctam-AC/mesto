import Popup from './Popup.js';

export default class PopupWithFormSubmit extends Popup {
  constructor (popupSelector, setElementData) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._setElementData = setElementData
    this._buttonAddPopup = this._form.querySelector('.popup__add-button');
  }

   setDataCard (elemenCard) {
    return this._elementCard = elemenCard;
  }

  renderDeleting = (isDelete) => {
    if (isDelete) {
      this._buttonAddPopup.textContent = 'Удаление...'}
    else {
      this._buttonAddPopup.textContent = 'Да'
    }
  }

  setEventListeners () {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._setElementData (this._elementCard);
    });
  }
}


