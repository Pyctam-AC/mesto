import {
  popupImg,
  popupFugureCap,
} from './constants/constant.js';

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  open(data) {
    super.open();
    popupImg.src = data.link;
    popupImg.alt = data.name
    popupFugureCap.textContent = data.name;
  }
}

