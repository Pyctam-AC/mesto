import openPopup from './index.js';

export class Card {
  constructor (data, templateSelector) {
    this._placeImage = data.link;
    this._placeTitle = data.name;
    this._templateSelector = templateSelector;
  }

  //создаие карточки
  _getTemplate () {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.place__item')
      .cloneNode(true); //клонирование карточки
  }

  //содержимое карточки
  createCards () {
    this._element = this._getTemplate();

    this._element.querySelector('.place__img').src = this._placeImage;
    this._element.querySelector('.place__img').alt = this._placeTitle;
    this._element.querySelector('.place__title').textContent = this._placeTitle;

    this._setEventListeners(); //слушатели события в карточке

    return this._element;
  }

  _setEventListeners () {
    this._element.querySelector('.like-button').addEventListener('click', (evt) => {
      this._likedClick(evt);
    });

    this._element.querySelector('.place__trash').addEventListener('click', (evt) => {
      this._removePlaceClick(evt);
    });

    this._element.querySelector('.place__img').addEventListener('click', (evt) => {
      this._openPopupImage(evt);
    });
  }

  //лайк
  _likedClick(evt) {
    evt.preventDefault(evt);
    this._element.querySelector('.like-button').classList.toggle('like-button_active');
  }

  //удаление карточки
  _removePlaceClick(evt) {
    evt.preventDefault();
    this._element.remove();
  }

  //открываем попап с картинкой
  _openPopupImage(evt) {
    evt.preventDefault(evt);
    popoupImg.src = this._placeImage;
    popoupImg.alt = this._placeTitle;
    popupFugureCap.textContent = this._placeTitle;
    openPopup (popupImage);
  }
}
