import './index.css';

import {profileOpenButton,
        placeOpenButton,
        validationConfig,
        placeForm,
        profileForm,
        profileAvatar,
        avatarChangeForm
} from '../components/constants/constant.js';

import Section from '../components/Section.js';

import Card from '../components/Card.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupWithFormSubmit from '../components/PopupWithFormSubmit.js';

import FormValidator from '../components/FormValidator.js';

import UserInfo from '../components/UserInfo.js';

import Api from '../components/Api.js'

let userID = '';

//===============================================
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'dcda7652-e6c3-4950-99a4-e4a7cc367bc0',
    'Content-Type': 'application/json'
  }
});

//===========================================================================================
const profileInfo = new UserInfo ('.profile__photo', '.profile__title', '.profile__subtitle');

api.getInfoProfile()
.then((data) => {
  profileInfo.setUserInfo(data)
  userID = data._id
})
.catch((err) => {
  console.log(err);
});

//===============================
const handleCardClick = (placeImage, placeTitle) => {
  popupImage.open (placeImage, placeTitle)
}

const handleTrashClick = (cardElement, id) => {
  popupTrash.setDataCard (cardElement, id);
  popupTrash.open ();
}

const handleLikeClick = (Card) => {
  if (Card.likes.find(likeElemetn => likeElemetn._id === Card.userID)) {
    api.setLikeCard(Card.id, 'DELETE')
      .then((data) => {
        Card.showinglikes(data.likes, false)
      })
      .catch((err) => { console.log(err) })
  }
  else {
    api.setLikeCard(Card.id, 'PUT')
      .then((data) => {
        Card.showinglikes(data.likes, true)
      })
      .catch((err) => { console.log(err) })
  }
};


const renederCard = (item) => {
  const newCard = new Card ({data: item,
    handleCardClick,
    handleTrashClick,
    handleLikeClick
    },
    '#place__item', userID);
  return newCard.createCard ();
}

const cardList = new Section ({
  renderer: (cardItem) => {
      cardList.setItem(renederCard (cardItem));
    }
  },
  '.place__card')


api.getInitialCards()
.then((data) => {
  cardList.renderItems(data);
})
.catch((err) => {
  console.log(err);
});

//============================

//popup-картинка
export const popupImage = new PopupWithImage ('.popup_img');
popupImage.setEventListeners ();

//=====================

//popupTrash
const popupTrash = new PopupWithFormSubmit ('.popup_trash', api);
popupTrash.setEventListeners ();


//=========================

//экземпляр popup-место
export const popupPlace = new PopupWithForm ('.popup_place',
  (formData) => {
    popupPlace.renderLoading(true);
    api.setNewCard(formData.addNamePlace, formData.addLinkPlace)
    .then((data) => {
      cardList.setItem(renederCard (data));
    })
    .then(() => {
      popupPlace.renderLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupPlace.close();
    });
})
popupPlace.setEventListeners ();

//открываем popup-место
placeOpenButton.addEventListener('click', () => {
  popupPlace.open()
  formPlaceValidator.resetValidation();
});

//валидация формы-место
const formPlaceValidator = new FormValidator (validationConfig, placeForm);
formPlaceValidator.enableValidation();

//==========



const popupProfileData = new PopupWithForm ('.popup_profile', (data) => {
  popupProfileData.renderLoading(true);
  api.setInfoProfile (data)
  .then((data) => {
    profileInfo.setUserInfo(data);
  })
  .then(() => {
    popupProfileData.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupProfileData.close();
  });
})
popupProfileData.setEventListeners ();

profileOpenButton.addEventListener('click', () => {
  popupProfileData.open();
  const data = profileInfo.getUserInfo();
  popupProfileData.setInputValues ({name: data.name, about: data.about})
  formProfileValidator.resetValidation();
});

const formProfileValidator = new FormValidator (validationConfig, profileForm);
formProfileValidator.enableValidation ();

//смена фото аватара

const formAvatarValidator = new FormValidator (validationConfig, avatarChangeForm);
formAvatarValidator.enableValidation();

const popupAvatarChange = new PopupWithForm ('.popup_avatar', (data) => {
  popupAvatarChange.renderLoading(true);
  api.setNewAvatar (data.avatar)
  .then((data) => {
    profileInfo.setUserInfo(data)
  })
  .then(() => {
    popupAvatarChange.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupAvatarChange.close();
  });
})
popupAvatarChange.setEventListeners();

profileAvatar.addEventListener('click', () => {
  popupAvatarChange.open();
  formAvatarValidator.resetValidation();
})
