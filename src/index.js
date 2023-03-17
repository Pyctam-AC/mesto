import './pages/index.css';

import {initialCards,
        nameTitle,
        job,
        popupProfile,
        profileForm,
        profileOpenButton,
        nameInput,
        jobInput,
        placeOpenButton,
        popupPlace,
        placeForm,
        placeInput,
        placeLink,
        validationConfig,
} from './scripts/constants/constant.js';

import Section from './scripts/Section.js';

import Card from './scripts/Card.js';

import Popup from './scripts/Popup.js';

import PopupWithImage from './scripts/PopupWithImage.js';

import PopupWithForm from './scripts/PopupWithForm.js';

import FormValidator from './scripts/FormValidator.js';

const cardList = new Section ({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = new Card ({data: cardItem,
                              handleCardClick: () =>
                                popupImage.open (cardItem)
                              },
      '#place__item');
    const cardElement = newCard.createCard ();
    cardList.setItem(cardElement)
    }
  },
  '.place__card');
cardList.renderItems();

export const popupImage = new PopupWithImage ('.popup_img');



//инициализируеи карточки с импортированным классом
/* const getCard = (card) => {
  const newCard = new Card (card, '#place__item');
  return newCard.createCard ();
}; */

//вставляем карточки в разметку
/* const prependCards = (card) => cardsContainer.prepend(getCard(card)); */

//перебериаем карточки из списка
/* initialCards.forEach((item) => {
  prependCards(item);
}); */

//input form-place - создание новой карточки из формы
function handleFormSubmitPlace (evt) {
  evt.preventDefault();
  prependCards ({name: placeInput.value, link: placeLink.value});
  closePopup (popupPlace);
};

//закрытие по escape
function handleEscape (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};

//закрытие popup мышкой
function closePopupMouse (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
  else if (evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  };
};

//open popup
export default function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener('mousedown', closePopupMouse);
  document.addEventListener('keydown', handleEscape);
};

//close popup
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
  popupElement.removeEventListener('mousedown', closePopupMouse);
};

//open popup-profile
function openPopupProfile (popupElement) {
  nameInput.value = nameTitle.textContent;
  jobInput.value = job.textContent;
  openPopup (popupElement);
  //кнопка при открытии неактивна
  formProfileValidator.disableButton (profileForm.querySelector('.popup__add-button'), validationConfig.disableFormBtnClass);
};

//open popup-place
function openPopupPlace (popupElement) {
  placeForm.reset();
  openPopup (popupElement);
  //кнопка при открытии неактивна
  formPlaceValidator.disableButton (placeForm.querySelector('.popup__add-button'), validationConfig.disableFormBtnClass);
};

//input form-profile - изменение данных профиля из формы
function handleFormSubmitProfile (evt) {
  evt.preventDefault();
  job.textContent = jobInput.value;
  nameTitle.textContent = nameInput.value;
  closePopup (popupProfile);
};

//валидация каждой формы
const formProfileValidator = new FormValidator (validationConfig, profileForm);
formProfileValidator.enableValidation ();

const formPlaceValidator = new FormValidator (validationConfig, placeForm);
formPlaceValidator.enableValidation ();

//глобальные кнопки-слушатели
placeOpenButton.addEventListener('click', () => openPopupPlace (popupPlace)); //открываем popup место
placeForm.addEventListener('submit', handleFormSubmitPlace); //сохраняем новую карточку место


profileOpenButton.addEventListener('click', () => openPopupProfile (popupProfile)); //открываем Popup профиля
profileForm.addEventListener('submit', handleFormSubmitProfile); //сохраняем новые данные профиля




//buttonClosePopupProfile.addEventListener('click', () => closePopup (popupProfile)); //закрываем Popup профиля
//buttonClosePopupImg.addEventListener('click', () => closePopup (popupImage)); //закрывем popup с картинкой
//buttonClosePopupPlace.addEventListener('click', () => closePopup (popupPlace)); ////закрываем popup место
/*
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});


const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
*/


/*Карточки место start*/
//нашёл карточку
//const placeCards = containerCard; //контейнер карточек
//const placeTemplate = document.querySelector('#place__item').content; //tempalate для карточек


//закомментированный код перенёс в Card.js

//функция рендера карточек
/* function renderCard(items) {
  const placeItems = items.map((item) => {
    return createCard (item);
  });
  placeCards.prepend(... placeItems); //размещаем карточки в начале
}; */


/*
//функция создания одной карточки
function createCard (item) {
  const placeItem = placeTemplate.querySelector('.place__item').cloneNode(true); //клонировал карточку
  const placeImg = placeItem.querySelector('.place__img'); //картинка в карточке
  const placeTitle = placeItem.querySelector('.place__title'); //текст в карточке
  placeImg.src = item.link;
  placeImg.alt = item.name;
  placeTitle.textContent = item.name;

  //лайки в карточках
  const likePlacebtn = placeItem.querySelector('.like-button'); //кнопка лайк место
  likePlacebtn.addEventListener('click', function (evt) {
    evt.target.classList.toggle('like-button_active')});

  //удаление карточки
  const deconstItem = placeItem.querySelector('.place__trash'); //кнопка удаления карточки
  deconstItem.addEventListener('click', function(evt) {
    evt.preventDefault();
    placeItem.remove()});

  //popoup картинка
  placeImg.addEventListener('click', () => {  //открываем popup с картинкой
    popoupImg.src = placeImg.src;
    popoupImg.alt = placeImg.alt;
    popupFugureCap.textContent = placeTitle.textContent;
    openPopup (popupImage)});
  return placeItem; //возвращаем карточку
};

//renderCard(initialCards); //вызываем функция рендера карточек при загрузке страницы

*/
