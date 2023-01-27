//редактирование профиля
let nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
let job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице

let popup_profile = document.querySelector('.popup_profile'); //страница модалки профиля
let formElement = document.querySelector('.popup__form_profile'); //обёртка формы в профиля
let open_popup = document.querySelector('.profile__edit-button'); //кнопка открытия модалки профиля
let nameInput = formElement.querySelector('.popup__input_type_name'); //поле ввода имени в модалке профиля
let jobInput = formElement.querySelector('.popup__input_type_job'); //поле ввода професии в модалке профиля
let close_popup_profile = document.querySelector('.popup__close-button_profile'); //крестик - кнопка закрытия модалки профиля

//добавления карточки места

let open_popupPlace = document.querySelector('.profile__add-button'); //кнопка открытия модалки место
let popup_place = document.querySelector('.popup_place'); //страница модалки место
let formPlace = document.querySelector('.popup__form_place'); //обёртка формы в место
let placeInput = formPlace.querySelector('.popup__input_type_place'); //поле ввода названия места в модалке профиля
let placeLink = formPlace.querySelector('.popup__input_type_link-place'); //поле ввода ссылки места в модалке профиля
let close_popup_place = document.querySelector('.popup__close-button_place'); //крестик - кнопка закрытия модалки места



//popup картинки
const popupImage = document.querySelector('.popup_img'); //попап с картинкой
let popoupImg = popupImage.querySelector('.popup__image'); //фото в попап
let popupFugureCap = popupImage.querySelector('.popup__figurcap'); //подпись под картинкой в попап

let popup__close_button_img = document.querySelector('.popup__close-button_img'); //кнопка закрытия попап с картинкой


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
const placeCards = document.querySelector('.place__card');
const placeTemplate = document.querySelector('#place__item').content;

//перебрал и создал новый массив
const placeInfo = initialCards.map(function (item) {
  return {
    namePlace: item.name,
    linkPlace: item.link
  };
});

//проверил новый массив и передал в функцию создания карточек
function render() {
  placeInfo.forEach(renderCard);
}

//рисую карточки из нового массива
function renderCard({ namePlace, linkPlace }) {
  const placeItems = placeTemplate.querySelector('.place__item').cloneNode(true);//клонировал карточку
  let placeImg = placeItems.querySelector('.place__img');
  let placeTitle = placeItems.querySelector('.place__title');
  placeImg.src = linkPlace;
  placeImg.alt = namePlace;
  placeTitle.textContent = namePlace;
  placeCards.prepend(placeItems);

//popoup картинка
  placeImg.addEventListener('click', () => {      //открываем popup с картинкой
    popoupImg.src = placeImg.src;
    popoupImg.alt = placeImg.alt;
    popupFugureCap.textContent = placeTitle.textContent;
    openPopup (popupImage)});

  popup__close_button_img.addEventListener('click', () => {closePopup (popupImage)}); //закрывем popup с картинкой

//лайки в карточках
  let likePlacebtn = placeItems.querySelector('.like-button'); //кнопка лайк место

  likePlacebtn.addEventListener('click', function (evt) {
      evt.target.classList.toggle('like-button_active');
    });

  //input form-place
  function placeFormSubmit (evt) {
    evt.preventDefault();

//    placeInfo.push({namePlace: placeInput.value, linkPlace: placeLink.value});

    let itemNew = evt.target.closest('.place__item');

    itemNew = renderCard({namePlace: placeInput.value, linkPlace: placeLink.value});

    console.log(itemNew);

    placeCards.prepend(itemNew);

//    console.log(placeInfo);

//    render();

    closePopup (popup_place);
  }
  formPlace.addEventListener('submit', placeFormSubmit);

}

render(); //вызов функции отрисовки карточек

/*Карточки место end*/


//open popup
function openPopup (popupElements){
  popupElements.classList.add('popup_opened');
}

//close popup
function closePopup (popupElements) {
  popupElements.classList.remove('popup_opened');
}


/*Редактирование профиля*/

//open popup-profile
function openPopupProfile () {
  nameInput.value = nameTitle.textContent;
  jobInput.value = job.textContent;
  openPopup (popup_profile);
}
open_popup.addEventListener('click', openPopupProfile);

close_popup_profile.addEventListener('click', () => {closePopup (popup_profile)});

//input form-profile
function handleFormSubmit (evt) {
  evt.preventDefault();
  job.textContent = jobInput.value;
  nameTitle.textContent = nameInput.value;
  closePopup (popup_profile);
}
formElement.addEventListener('submit', handleFormSubmit);



/*Добавление и удаление места*/

open_popupPlace.addEventListener('click', () => {openPopup (popup_place)});

close_popup_place.addEventListener('click', () => {closePopup (popup_place)});


/*
//input form-place
function placeFormSubmit (evt) {
  evt.preventDefault();

  placeInfo.push({namePlace: placeInput.value, linkPlace: placeLink.value});

  console.log(placeInfo);

  render();

  closePopup (popup_place);
}
formPlace.addEventListener('submit', placeFormSubmit);
*/


