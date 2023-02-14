
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
function handleEscape (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
};



//закрытие мышкой
function closePopupMouse (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
  if (evt.target === (evt.currentTarget.querySelector('.popup__close-button'))) {
    closePopup(evt.currentTarget);
  };
};

//open popup
function openPopup (popupElement) {
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
  disableButton (profileForm.querySelector('.popup__add-button'), config.disableFormBtnClass);
};

//open popup-place
function openPopupPlace (popupElement) {
  placeForm.reset();
  openPopup (popupElement);
  //кнопка при открытии неактивна
  disableButton (placeForm.querySelector('.popup__add-button'), config.disableFormBtnClass);
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
//buttonClosePopupPlace.addEventListener('click', () => closePopup (popupPlace)); ////закрываем popup место
placeOpenButton.addEventListener('click', () => openPopupPlace (popupPlace)); //открываем popup место
placeForm.addEventListener('submit', handleFormSubmitProfilePlace); //сохраняем новую карточку место

profileOpenButton.addEventListener('click', () => openPopupProfile (popupProfile)); //открываем Popup профиля
//buttonClosePopupProfile.addEventListener('click', () => closePopup (popupProfile)); //закрываем Popup профиля
profileForm.addEventListener('submit', handleFormSubmitProfile); //сохраняем новые данные профиля

//buttonClosePopupImg.addEventListener('click', () => closePopup (popupImage)); //закрывем popup с картинкой

renderCard(initialCards); //вызываем функция рендера карточек при загрузке страницы

/*
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});
 */

