//коннтейнер с карточками
export const cardsContainer = document.querySelector('.place__card');

//редактирование профиля
export const profileAvatar = document.querySelector('.profile__avatar'); //фото аватара
export const avatarChangeForm = document.querySelector('.popup__form_avatar'); //модалка замены аватара
export const profileForm = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
export const profileOpenButton = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
export const nameInput = profileForm.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
export const jobInput = profileForm.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля

//добавления карточки
export const placeOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
export const placeForm = document.querySelector('.popup__form_place'); //обёртка формы в место


export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  invalidInputClass:'popup__input_invalid',
  inputErrorClassTemplate: '.input-error-',
  formSubmitBtnSelector: '.popup__add-button',
  disableFormBtnClass: 'popup__add-button_disabled'
};
