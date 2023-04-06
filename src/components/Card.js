export default class Card {
  constructor ({data, handleCardClick, handleTrashClick, handleLikeClick}, templateSelector, userID) {
    this._placeImage = data.link;
    this._placeTitle = data.name;
    this.likes = data.likes;
    this.id = data._id;
    this._ownerCardID = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
    this.userID = userID
  }

  //создаие карточки
  _getTemplate () {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.place__item')
      .cloneNode(true);
  }

  showinglikes (data, isLiked) {
    this.likes = data;
    this.element.querySelector('.place__like').textContent = this.likes.length;
    this._handleLike(isLiked)
  }

  createCard () {
    this.element = this._getTemplate();
    this._imageCard = this.element.querySelector('.place__img');
    this._imageCard.src = this._placeImage;
    this._imageCard.alt = this._placeTitle;
    this.element.querySelector('.place__title').textContent = this._placeTitle;
    this._likeElementCard = this.element.querySelector('.like-button');
    this.showinglikes (this.likes)
    this._trashButton = this.element.querySelector('.place__trash')
    if (this._ownerCardID != this.userID) {
      this._trashButton.classList.add('place__trash_none');
    }

    this.likes.forEach(likeElemetn => {
      this._likeElementID = likeElemetn._id
      if (this._likeElementID === this.userID) {
        this._likeElementCard.classList.add('like-button_active');
      }
    });

    this._setEventListeners();

    return this.element;
  }

  _setEventListeners () {
    this._likeElementCard.addEventListener('click', () => {
      this._handleLikeClick(this);
/*       this._handleLike(); */
    });

    this._trashButton.addEventListener('click', () => {
      this._handleTrashClick(this);
    });

    this._imageCard.addEventListener('click', () => {
      this._handleCardClick (this._placeImage, this._placeTitle);
    });
  }

  _handleLike(isLiked) {
    if (isLiked) {
      this._likeElementCard.classList.add('like-button_active');
    } else {
      this._likeElementCard.classList.remove('like-button_active');
    }
  }

  //удаление карточки
  deleteCard (elementCard) {
    elementCard.remove();
    elementCard = null;
  }
}

  /*  this._placeImage = data.link;
    this._placeTitle = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerCardID = data.owner._id;
 */

    /*     this._imageCard = this.element.querySelector('.place__img');
    this._imageCard.src = this._placeImage;
    this._imageCard.alt = this._placeTitle;
  //  this._likes.length = this._likeNumber;
    this.element.querySelector('.place__title').textContent = this._placeTitle;
    this.element.querySelector('.place__like').textContent = this._likes.length; */

    /*   likeNumber (likeNumber) {
    return likeNumber.length
  }
 */

/*   userID (idUser) {
    return this._idUser = idUser
  }

  setDataCard (data) {
    return this._data = {
      link: data.link,
      name: data.name,
      likes: data.likes,
      idCard: data._id,
      idOwner: data.owner._id
    }
  } */

  /*     this._imageCard.src = this._data.link;
    this._imageCard.alt = this._data.name;
    this.element.querySelector('.place__title').textContent = this._data.name;
    this.element.querySelector('.place__like').textContent = this._data.likes.length; */

