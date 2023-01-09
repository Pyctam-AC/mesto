let popup = document.querySelector('.popup'); //страница модалки
let open_popup = document.querySelector('.profile__edit-button'); //кнопка открытия модалки
let close_popup = document.querySelector('.popup__close-button'); //крестик - кнопка закрытия модалки
let addButton = document.querySelector('.popup__add-button'); //кнопка сохранить в модалке
let nameTitle = document.querySelector('.profile__title'); //поле имени на главной странице
let job = document.querySelector('.profile__subtitle'); //поле профессии на главной странице
let formElement = document.querySelector('.popup__form'); //обёртка формы в HTML
let nameInput = formElement.querySelector('.popup__input-name'); //поле ввода имени в модалке
let jobInput = formElement.querySelector('.popup__input-job'); //поле ввода професии в модалке


//open popup
function openPopup () {    
    popup.classList.add('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = job.textContent;
}
open_popup.addEventListener('click', openPopup);

//close popup
function closePopup () {
    popup.classList.remove('popup_opened');
}
close_popup.addEventListener('click', closePopup);


//input form
function handleFormSubmit (evt) {
    evt.preventDefault();

    nameTitle.textContent = nameInput.value;
    job.textContent = jobInput.value;

    closePopup ();
}
formElement.addEventListener('submit', handleFormSubmit);