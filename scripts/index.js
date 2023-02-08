//редактирование профиля
const nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
const job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице

const popupProfile = document.querySelector('.popup_profile'); //страница модалки профиля
const formElement = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
const nameInput = formElement.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
const jobInput = formElement.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля
const buttonClosePopupProfile = document.querySelector('.popup__close-button_profile'); //крестик - кнопка закрытия модалки профиля

//добавления карточки места
const buttonOpenPopupPlace = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
const popupPlace = document.querySelector('.popup_place'); //страница модалки место
const formPlace = document.querySelector('.popup__form_place'); //обёртка формы в место
const placeInput = formPlace.querySelector('.popup__input_type_place'); //поле ввода названия места в модалке профиля
const placeLink = formPlace.querySelector('.popup__input_type_link-place'); //поле ввода ссылки места в модалке профиля
const buttonClosePopupPlace = document.querySelector('.popup__close-button_place'); //крестик - кнопка закрытия модалки места

//popup картинки
const popupImage = document.querySelector('.popup_img'); //попап с картинкой
const popoupImg = popupImage.querySelector('.popup__image'); //фото в попап
const popupFugureCap = popupImage.querySelector('.popup__figurcap'); //подпись под картинкой в попап
const buttonClosePopupImg = document.querySelector('.popup__close-button_img'); //крестик - кнопка закрытия попап с картинкой

/*Карточки место start*/

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

//нашёл карточку
const placeCards = document.querySelector('.place__card'); //контейнер карточек
const placeTemplate = document.querySelector('#place__item').content; //tempalate для карточек


//функция рендера карточек
function renderCard(items) {
  const placeItems = items.map((item) => {
    return createCards (item);
  });
  placeCards.prepend(... placeItems); //размещаем карточки в начале
};

//функция создания одной карточки
function createCards (item) {
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

//open popup
function openPopup (popupElements){
  popupElements.classList.add('popup_opened');
};

//close popup
function closePopup (popupElements) {
  popupElements.classList.remove('popup_opened');
};

//open popup-profile
function openPopupProfile () {
  nameInput.value = nameTitle.textContent;
  jobInput.value = job.textContent;
  openPopup (popupProfile);
};

//open popup-place
function openPopupPlace () {
  placeInput.value = '';
  placeLink.value = '';
  openPopup (popupPlace);
};

//input form-place
function handleFormSubmitProfilePlace (evt) {
  evt.preventDefault();
  const newItem = createCards({name: placeInput.value, link: placeLink.value});
  placeCards.prepend(newItem);
  closePopup (popupPlace);
};

//input form-profile
function handleFormSubmitProfile (evt) {
  evt.preventDefault();
  job.textContent = jobInput.value;
  nameTitle.textContent = nameInput.value;
  closePopup (popupProfile);
};

//глобальные кнопки-слушатели
buttonClosePopupPlace.addEventListener('click', () => {closePopup (popupPlace)}); ////закрываем popup место
buttonOpenPopupPlace.addEventListener('click', openPopupPlace); //открываем popup место
formPlace.addEventListener('submit', handleFormSubmitProfilePlace); //сохраняем новую карточку место

buttonOpenPopupProfile.addEventListener('click', openPopupProfile); //открываем Popup профиля
buttonClosePopupProfile.addEventListener('click', () => {closePopup (popupProfile)}); //закрываем Popup профиля
formElement.addEventListener('submit', handleFormSubmitProfile); //сохраняем новые данные профиля

buttonClosePopupImg.addEventListener('click', () => {closePopup (popupImage)}); //закрывем popup с картинкой


renderCard(initialCards); //вызываем функция рендера карточек при загрузке страницы
