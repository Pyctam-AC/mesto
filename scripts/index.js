
/*Карточки место start*/

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

//закрытие по escape
function keyHandlerEsk (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
  document.removeEventListener('keydown', keyHandlerEsk);
};

//закрытие мышкой
function closePopupMouse (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(document.querySelector('.popup_opened'));
  }
 /*  if (evt.target === document.querySelector('.popup__close-button')) {
    console.log(evt.currentTarget)
    closePopup(document.querySelector('.popup_opened'));
  }; */
};

//open popup
function openPopup (popupElements) {
  popupElements.classList.add('popup_opened');
  popupElements.addEventListener('mousedown', closePopupMouse);
  document.addEventListener('keydown', keyHandlerEsk);
};

//close popup
function closePopup (popupElements) {
  popupElements.classList.remove('popup_opened');
};

//open popup-profile
function openPopupProfile (popupElements) {
  nameInput.value = nameTitle.textContent;
  jobInput.value = job.textContent;
  openPopup (popupElements);
  //кнопка при открытии неактивна
  disableButton (formElement.querySelector('.popup__add-button'), config.disableFormBtnClass);
};

//open popup-place
function openPopupPlace (popupElements) {
  formPlace.reset();
  openPopup (popupElements);
  //кнопка при открытии неактивна
  disableButton (formPlace.querySelector('.popup__add-button'), config.disableFormBtnClass);
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
buttonClosePopupPlace.addEventListener('click', () => closePopup (popupPlace)); ////закрываем popup место
buttonOpenPopupPlace.addEventListener('click', () => openPopupPlace (popupPlace)); //открываем popup место
formPlace.addEventListener('submit', handleFormSubmitProfilePlace); //сохраняем новую карточку место

buttonOpenPopupProfile.addEventListener('click', () => openPopupProfile (popupProfile)); //открываем Popup профиля
buttonClosePopupProfile.addEventListener('click', () => closePopup (popupProfile)); //закрываем Popup профиля
formElement.addEventListener('submit', handleFormSubmitProfile); //сохраняем новые данные профиля

buttonClosePopupImg.addEventListener('click', () => closePopup (popupImage)); //закрывем popup с картинкой

renderCard(initialCards); //вызываем функция рендера карточек при загрузке страницы


