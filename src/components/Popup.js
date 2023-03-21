export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open () {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close () {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners () {
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