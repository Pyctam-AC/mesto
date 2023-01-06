let popup = document.querySelector('.popup');
let open_popup = document.querySelector('.edit-button');
let close_popup = document.querySelector('.popup-close-button');
let addButton = document.querySelector('.popup-button');

//open popup
function openPopup () {
    popup.style.display = 'block';
}

open_popup.addEventListener('click', openPopup);

//close popup
function closePopup () {
    popup.style.display = 'none';
}

close_popup.addEventListener('click', closePopup);


//save form
function handleFormSubmit (evt) {
    evt.preventDefault();

    let jobInput = document.querySelector('.popup__container-prof').value;
    let nameInput = document.querySelector('.popup__container-form').value;
    
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');

    name.textContent = nameInput;
    job.textContent = jobInput;

    closePopup ();

}

addButton.addEventListener('click', handleFormSubmit);