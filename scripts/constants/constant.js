//коннтейнер с карточками мест
const cardsContainer = document.querySelector('.place__card');

//редактирование профиля
const nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
const job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице

const popupProfile = document.querySelector('.popup_profile'); //страница модалки профиля
const profileForm = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
const profileOpenButton = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
const nameInput = profileForm.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
const jobInput = profileForm.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля
//const buttonClosePopupProfile = document.querySelector('.popup__close-button_profile'); //крестик - кнопка закрытия модалки профиля

//добавления карточки места
const placeOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
const popupPlace = document.querySelector('.popup_place'); //страница модалки место
const placeForm = document.querySelector('.popup__form_place'); //обёртка формы в место
const placeInput = placeForm.querySelector('.popup__input_type_place'); //поле ввода названия места в модалке профиля
const placeLink = placeForm.querySelector('.popup__input_type_link-place'); //поле ввода ссылки места в модалке профиля
//const buttonClosePopupPlace = document.querySelector('.popup__close-button_place'); //крестик - кнопка закрытия модалки места

//popup картинки
const popupImage = document.querySelector('.popup_img'); //попап с картинкой
const popoupImg = popupImage.querySelector('.popup__image'); //фото в попап
const popupFugureCap = popupImage.querySelector('.popup__figurcap'); //подпись под картинкой в попап
//const buttonClosePopupImg = document.querySelector('.popup__close-button_img'); //крестик - кнопка закрытия попап с картинкой


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  invalidInputClass:'popup__input_invalid',
  inputErrorClassTemplate: '.input-error-',
  formSubmitBtnSelector: '.popup__add-button',
  disableFormBtnClass: 'popup__add-button_disabled'
};
