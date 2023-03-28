import './index.css';

import {initialCards,
        profileOpenButton,
        placeOpenButton,
        validationConfig,
        placeForm,
        profileForm
} from '../components/constants/constant.js';

import Section from '../components/Section.js';

import Card from '../components/Card.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import FormValidator from '../components/FormValidator.js';

import UserInfo from '../components/UserInfo.js';

//==========
const handleCardClick = (placeImage, placeTitle) => {
  popupImage.open (placeImage, placeTitle)
}

const renederCard = (item) => {
  const newCard = new Card ({data: item,
    handleCardClick},
    '#place__item');
  return newCard.createCard ();
}

const cardList = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    cardList.setItem(renederCard (cardItem));
    }
  },
  '.place__card');
cardList.renderItems();
//===========

//popup-картинка
export const popupImage = new PopupWithImage ('.popup_img');
popupImage.setEventListeners ();

//=========

//экземпляр popup-место
export const popupPlace = new PopupWithForm ('.popup_place',
  (formData) => {
  cardList.setItem(renederCard ({name: formData.addNamePlace, link: formData.addLinkPlace}));
})
popupPlace.setEventListeners ();

//открываем popup-место
placeOpenButton.addEventListener('click', () => {
  popupPlace.open()
  formPlaceValidator.resetValidation();
});

//валидация формы-место
const formPlaceValidator = new FormValidator (validationConfig, placeForm);
formPlaceValidator.enableValidation();

//==========

const profileInfo = new UserInfo ('.profile__title', '.profile__subtitle');

const popupProfileData = new PopupWithForm ('.popup_profile', (data) => {
  profileInfo.setUserInfo(data);
})
popupProfileData.setEventListeners ();

profileOpenButton.addEventListener('click', () => {
  popupProfileData.open();
  const {addname, addjob} = profileInfo.getUserInfo();
  popupProfileData.setInputValues ({addname, addjob})
  formProfileValidator.resetValidation();
});

const formProfileValidator = new FormValidator (validationConfig, profileForm);
formProfileValidator.enableValidation ();

