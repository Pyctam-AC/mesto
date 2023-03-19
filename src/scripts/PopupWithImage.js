import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__image'); //фото в попап
    this._popupFugureCap = this._popup.querySelector('.popup__figurcap'); //подпись под картинкой в попап
  }

  open(placeImage, placeTitle) {
    super.open();
    this._popupImg.src = placeImage;
    this._popupImg.alt = placeTitle
    this._popupFugureCap.textContent = placeTitle;
  }
}
