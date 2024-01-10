export default class Section {
  constructor ({renderer}, selector) {
    this._renderer = renderer,
    this._container = document.querySelector(selector);
  }

  renderItems(data)  {
    data.forEach(item => this._renderer(item));
  }

  setPrependItem (element) {
    this._container.prepend(element);
  }

  setAppendItems (element) {
    this._container.append(element);
  }
}
