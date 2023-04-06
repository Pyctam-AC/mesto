import './index.css';

import {profileOpenButton,
        placeOpenButton,
        validationConfig,
        placeForm,
        profileForm,
        profileAvatar,
        avatarChangeForm
} from '../utils/constant.js';

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


Promise.all([api.getInfoProfile(), api.getInitialCards()])
  .then(([userInfo, cards]) => {
    //console.log(userInfo, cards);
    profileInfo.setUserInfo(userInfo)
    userID = userInfo._id
    cardList.renderItems(cards)
  })
  .catch((err) => { console.log(err) });

//===========================================================================================
const profileInfo = new UserInfo ('.profile__photo', '.profile__title', '.profile__subtitle');


//===============================
const handleCardClick = (placeImage, placeTitle) => {
  popupImage.open (placeImage, placeTitle)
}

//popupTrash
const popupTrash = new PopupWithFormSubmit ('.popup_trash', (card) => {
  api.deleteCard(card.id)
  .then(() => {
    card.deleteCard(card.element)
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupTrash.close();
  });
});
popupTrash.setEventListeners ();


const handleTrashClick = (card) => {
  popupTrash.setDataCard (card);
  popupTrash.open ();
}

const handleLikeClick = (card) => {
  if (card.likes.find(likeElemetn => likeElemetn._id === card.userID)) {
    api.setLikeCard(card.id, 'DELETE')
      .then((data) => {
        card.showinglikes(data.likes, false)
      })
      .catch((err) => { console.log(err) })
  }
  else {
    api.setLikeCard(card.id, 'PUT')
      .then((data) => {
        card.showinglikes(data.likes, true)
      })
      .catch((err) => { console.log(err) })
  }
};


const creatingCard = (item) => {
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
      cardList.setItem(creatingCard (cardItem));
    }
  },
  '.place__card')

//============================

//popup-картинка
export const popupImage = new PopupWithImage ('.popup_img');
popupImage.setEventListeners ();

//=====================

//экземпляр popup-место
export const popupPlace = new PopupWithForm ('.popup_place',
  (formData) => {
    popupPlace.renderLoading(true);
    api.setNewCard(formData.addNamePlace, formData.addLinkPlace)
    .then((data) => {
      cardList.setItem(creatingCard (data));
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
    formProfileValidator.resetValidation();
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
