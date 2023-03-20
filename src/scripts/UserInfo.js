export default class UserInfo {
  constructor (userName, userJob) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  getUserInfo () {
    this._data = {
      addname: this._userName.textContent,
      addjob: this._userJob.textContent
    }
    return this._data;
  }

  setUserInfo (data) {
    this._userName.textContent = data.addname;
    this._userJob.textContent = data.addjob;
  }
}
