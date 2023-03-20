export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open () {
    this._popup.classList.add('popup_opened');
    this. _setEventListeners();
  }

  close () {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._closePopupMouse);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close(document.querySelector('.popup_opened'));
    }
  }

  _setEventListeners () {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._closePopupMouse = (evt) => {
      if (evt.target === evt.currentTarget){
        this.close();
      }
      else if (evt.target.classList.contains('popup__close-button')) {
        this.close();
      };
    });
  }
}
