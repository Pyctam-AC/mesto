//редактирование профиля
let nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
let job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице

let popup_profile = document.querySelector('.popup_profile'); //страница модалки профиля
let formElement = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
let open_popup = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
let nameInput = formElement.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
let jobInput = formElement.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля
let close_popup_profile = document.querySelector('.popup__close-button_profile'); //крестик - кнопка закрытия модалки профиля

//добавления фото места
let placeTitle = document.querySelector('.place__title'); //название места в карточке

let open_popupPlace = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
let popup_place = document.querySelector('.popup_place'); //страница модалки место
let formPlace = document.querySelector('.popup__form_place'); //обёртка формы в место
let placeInput = formPlace.querySelector('.popup__input_type_place'); //поле ввода названия места в модалке профиля
let close_popup_place = document.querySelector('.popup__close-button_place'); //крестик - кнопка закрытия модалки места

//лайки
let likePlacebtn = document.querySelector('.like-button'); //кнопка лайк место


/*Редактирование профиля*/

//open popup-profile
function openPopup () {
  nameInput.value = nameTitle.textContent;
  jobInput.value = job.textContent;
  popup_profile.classList.add('popup_opened');
}
open_popup.addEventListener('click', openPopup);

//close popup-profile
function closePopup () {
  popup_profile.classList.remove('popup_opened');
}
close_popup_profile.addEventListener('click', closePopup);

//input form-profile
function handleFormSubmit (evt) {
  evt.preventDefault();
  job.textContent = jobInput.value;
  nameTitle.textContent = nameInput.value;
  closePopup ();
}
formElement.addEventListener('submit', handleFormSubmit);


/*Добавление и удаление места*/

//open popup-place
function openPopupPlace () {
  popup_place.classList.add('popup_opened');
}
open_popupPlace.addEventListener('click', openPopupPlace);

//close popup-place
function closePopupPlace () {
  popup_place.classList.remove('popup_opened');
}
close_popup_place.addEventListener('click', closePopupPlace);

//input form-place
function placeFormSubmit (evt) {
  evt.preventDefault();
  placeTitle.textContent = placeInput.value;
  closePopupPlace ();
}
formPlace.addEventListener('submit', placeFormSubmit);


/*клик лайка пока не работате на все лайки*/
function likePlace () {
  likePlacebtn.classList.toggle('like-button_active');
}
likePlacebtn.addEventListener('click', likePlace);
