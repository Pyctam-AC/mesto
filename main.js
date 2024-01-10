(()=>{"use strict";document.querySelector(".place__card");var t=document.querySelector(".profile__avatar"),e=document.querySelector(".popup__form_avatar"),n=document.querySelector(".popup__form_profile"),r=document.querySelector(".profile__edit-button"),o=(n.querySelector(".popup__input_type_name"),n.querySelector(".popup__input_type_job"),document.querySelector(".profile__add-button")),i=document.querySelector(".popup__form_place"),u={formSelector:".popup__form",inputSelector:".popup__input",invalidInputClass:"popup__input_invalid",inputErrorClassTemplate:".input-error-",formSubmitBtnSelector:".popup__add-button",disableFormBtnClass:"popup__add-button_disabled"};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}},{key:"setPrependItem",value:function(t){this._container.prepend(t)}},{key:"setAppendItems",value:function(t){this._container.append(t)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,u=e.handleTrashClick,a=e.handleLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._placeImage=o.link,this._placeTitle=o.name,this.likes=o.likes,this.id=o._id,this._ownerCardID=o.owner._id,this._templateSelector=n,this._handleCardClick=i,this._handleTrashClick=u,this._handleLikeClick=a,this.userID=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place__item").cloneNode(!0)}},{key:"showinglikes",value:function(t,e){this.likes=t,this.element.querySelector(".place__like").textContent=this.likes.length,this._handleLike(e)}},{key:"createCard",value:function(){var t=this;return this.element=this._getTemplate(),this._imageCard=this.element.querySelector(".place__img"),this._imageCard.src=this._placeImage,this._imageCard.alt=this._placeTitle,this.element.querySelector(".place__title").textContent=this._placeTitle,this._likeElementCard=this.element.querySelector(".like-button"),this.showinglikes(this.likes),this._trashButton=this.element.querySelector(".place__trash"),this._ownerCardID!=this.userID&&this._trashButton.classList.add("place__trash_none"),this.likes.forEach((function(e){t._likeElementID=e._id,t._likeElementID===t.userID&&t._likeElementCard.classList.add("like-button_active")})),this._setEventListeners(),this.element}},{key:"_setEventListeners",value:function(){var t=this;this._likeElementCard.addEventListener("click",(function(){t._handleLikeClick(t)})),this._trashButton.addEventListener("click",(function(){t._handleTrashClick(t)})),this._imageCard.addEventListener("click",(function(){t._handleCardClick(t._placeImage,t._placeTitle)}))}},{key:"_handleLike",value:function(t){t?this._likeElementCard.classList.add("like-button_active"):this._likeElementCard.classList.remove("like-button_active")}},{key:"deleteCard",value:function(t){t.remove(),t=null}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var m=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=d(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._closePopupMouse=function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&t.close()})}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__image"),e._popupFugureCap=e._popup.querySelector(".popup__figurcap"),e}return e=u,(n=[{key:"open",value:function(t,e){_(S(u.prototype),"open",this).call(this),this._popupImg.src=t,this._popupImg.alt=e,this._popupFugureCap.textContent=e}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,L(r.key),r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function L(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}(this,t)});function u(t,e){var n,r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=j(n=i.call(this,t)),a=function(t){n._buttonAddPopup.textContent=t?"Сохранение...":"Сохранить"},(o=L(o="renderLoading"))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonAddPopup=n._form.querySelector(".popup__add-button"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;P(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"resetForm",value:function(){this._form.reset()}},{key:"close",value:function(){P(O(u.prototype),"close",this).call(this),this.resetForm()}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,V(r.key),r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function V(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return D(t)}(this,t)});function u(t,e){var n,r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=D(n=i.call(this,t)),a=function(t){n._buttonAddPopup.textContent=t?"Удаление...":"Да"},(o=V(o="renderDeleting"))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._form=n._popup.querySelector(".popup__form"),n._setElementData=e,n._buttonAddPopup=n._form.querySelector(".popup__add-button"),n}return e=u,(n=[{key:"setDataCard",value:function(t){return this._elementCard=t}},{key:"setEventListeners",value:function(){var t=this;q(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._setElementData(t._elementCard)}))}},{key:"resetForm",value:function(){this._form.reset()}},{key:"close",value:function(){q(A(u.prototype),"close",this).call(this),this.resetForm()}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}function U(t,e,n){return(e=J(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===F(e)?e:String(e)}var M=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,"_disableButton",(function(){r._formSubmitBtnElement.classList.add(r._disableFormBtnClass),r._formSubmitBtnElement.disabled=!0})),U(this,"_enableButton",(function(){r._formSubmitBtnElement.classList.remove(r._disableFormBtnClass),r._formSubmitBtnElement.disabled=!1})),U(this,"_toggleButtonState",(function(){r._isButtonDisabled?r._disableButton():r._enableButton()})),U(this,"_showInputError",(function(){r._input.classList.add(r._invalidInputClass),r._errorElement.textContent=r._input.validationMessage})),U(this,"_hideInputError",(function(){r._inputsPopup.forEach((function(t){t.classList.remove(r._invalidInputClass)})),r._errorList.forEach((function(t){t.textContent=""}))})),U(this,"_hasInvalidInput",(function(){return r._inputsPopup.some((function(t){return!t.validity.valid}))})),U(this,"_checkInputValidity",(function(){r._input.validity.valid?r._hideInputError():r._showInputError()})),U(this,"_handleFormInput",(function(t){r._input=t.target,r._errorElement=r._formElement.querySelector("".concat(r._inputErrorClassTemplate).concat(r._input.name)),r._checkInputValidity(),r._isButtonDisabled=r._hasInvalidInput(),r._toggleButtonState()})),this._inputSelector=e.inputSelector,this._invalidInputClass=e.invalidInputClass,this._disableFormBtnClass=e.disableFormBtnClass,this._inputErrorClassTemplate=e.inputErrorClassTemplate,this._formElement=n,this._formSubmitBtnElement=this._formElement.querySelector(e.formSubmitBtnSelector),this._inputsPopup=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._errorList=this._formElement.querySelectorAll(".error")}var e,n;return e=t,(n=[{key:"resetValidation",value:function(){this._disableButton(),this._hideInputError()}},{key:"enableValidation",value:function(){var t=this;this._inputsPopup.forEach((function(e){e.addEventListener("input",(function(e){return t._handleFormInput(e)}))}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var $=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userAvatar=document.querySelector(e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._data={name:this._userName.textContent,about:this._userJob.textContent},this._data}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this._userAvatar.src=t.avatar,this._userId=t._id}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W="",X=new(function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return t._getResult(e)}))}},{key:"getInfoProfile",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return t._getResult(e)}))}},{key:"setInfoProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._getResult(t)}))}},{key:"setNewCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return n._getResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResult(t)}))}},{key:"setLikeCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:e,headers:this._headers}).then((function(t){return n._getResult(t)}))}},{key:"setNewAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._getResult(t)}))}}])&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"dcda7652-e6c3-4950-99a4-e4a7cc367bc0","Content-Type":"application/json"}});Promise.all([X.getInfoProfile(),X.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(o),W=o._id,ot.renderItems(i)})).catch((function(t){console.log(t)}));var Y=new $(".profile__photo",".profile__title",".profile__subtitle"),Z=function(t,e){it.open(t,e)},tt=new x(".popup_trash",(function(t){tt.renderDeleting(!0),X.deleteCard(t.id).then((function(){t.deleteCard(t.element)})).then((function(){tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.renderDeleting(!1)}))}));tt.setEventListeners();var et=function(t){tt.setDataCard(t),tt.open()},nt=function(t){t.likes.find((function(e){return e._id===t.userID}))?X.setLikeCard(t.id,"DELETE").then((function(e){t.showinglikes(e.likes,!1)})).catch((function(t){console.log(t)})):X.setLikeCard(t.id,"PUT").then((function(e){t.showinglikes(e.likes,!0)})).catch((function(t){console.log(t)}))},rt=function(t){return new p({data:t,handleCardClick:Z,handleTrashClick:et,handleLikeClick:nt},"#place__item",W).createCard()},ot=new c({renderer:function(t){ot.setAppendItems(rt(t))}},".place__card"),it=new w(".popup_img");it.setEventListeners();var ut=new I(".popup_place",(function(t){ut.renderLoading(!0),X.setNewCard(t.addNamePlace,t.addLinkPlace).then((function(t){ot.setPrependItem(rt(t))})).then((function(){at.resetValidation(),ut.close()})).catch((function(t){console.log(t)})).finally((function(){ut.renderLoading(!1)}))}));ut.setEventListeners(),o.addEventListener("click",(function(){ut.open(),at.resetValidation()}));var at=new M(u,i);at.enableValidation();var lt=new I(".popup_profile",(function(t){lt.renderLoading(!0),X.setInfoProfile(t).then((function(t){Y.setUserInfo(t)})).then((function(){ct.resetValidation(),lt.close()})).catch((function(t){console.log(t)})).finally((function(){lt.renderLoading(!1)}))}));lt.setEventListeners(),r.addEventListener("click",(function(){lt.open();var t=Y.getUserInfo();lt.setInputValues({name:t.name,about:t.about}),ct.resetValidation()}));var ct=new M(u,n);ct.enableValidation();var st=new M(u,e);st.enableValidation();var ft=new I(".popup_avatar",(function(t){ft.renderLoading(!0),X.setNewAvatar(t.avatar).then((function(t){Y.setUserInfo(t)})).then((function(){ft.close()})).catch((function(t){console.log(t)})).finally((function(){st.resetValidation(),ft.renderLoading(!1)}))}));ft.setEventListeners(),t.addEventListener("click",(function(){ft.open(),st.resetValidation()}))})();
//# sourceMappingURL=main.js.map