import {
  popupImg,
  popupFugureCap,
} from './constants/constant.js';

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  open (placeImage, placeTitle) {
    super.open ();
    popupImg.src = placeImage;
    popupImg.alt = placeTitle;
    popupFugureCap.textContent = placeTitle;
  }
}
