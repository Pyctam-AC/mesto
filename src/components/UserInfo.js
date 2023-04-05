export default class UserInfo {
  constructor (userAvatar, userName, userJob) {
    this._userAvatar = document.querySelector(userAvatar);
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  getUserInfo () {
    this._data = {
      name: this._userName.textContent,
      about: this._userJob.textContent
    }
    return this._data;
  }

  setUserInfo (data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._userId = data._id
  }
}
