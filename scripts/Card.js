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
  createCard () {
    this._element = this._getTemplate();

    this._imageCard = this._element.querySelector('.place__img');
    this._imageCard.src = this._placeImage;
    this._imageCard.alt = this._placeTitle;
    this._element.querySelector('.place__title').textContent = this._placeTitle;

    this._likeElementCard = this._element.querySelector('.like-button');

    this._setEventListeners(); //слушатели события в карточке

    return this._element;
  }

  _setEventListeners () {
    this._likeElementCard.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.place__trash').addEventListener('click', () => {
      this._handleTrashClick();
    });

    this._imageCard.addEventListener('click', () => {
      this._openPopupImage();
    });
  }

  //лайк
  _handleLikeClick() {
    this._likeElementCard.classList.toggle('like-button_active');
  }

  //удаление карточки
  _handleTrashClick() {
    this._element.remove();
    this._element = null;
  }

  //открываем попап с картинкой
  _openPopupImage() {
    popoupImg.src = this._placeImage;
    popoupImg.alt = this._placeTitle;
    popupFugureCap.textContent = this._placeTitle;
    openPopup (popupImage);
  }
}
