export default class UserInfo {
  constructor (userName, userJob) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  getUserInfo () {
    this._userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }

    return this._userInfo;
  }

  setUserInfo (info) {
    this._name = info.name,
    this._job = info.job
  }
}
