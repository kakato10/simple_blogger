class LocalStorage {
  constructor(version) {
    this.storage = this._getStorage();
  }

  _getStorage() {
    return window.localStorage;
  }

  get(key) {
    if (!this.storage) {
      return;
    }
    const data = JSON.parse(this.storage.getItem(key));

    return data;
  }

  set(key, object) {
    if (!this.storage) {
      return;
    }
    try {
      this.storage.setItem(key, JSON.stringify(object));
    } catch (e) {
      window.alert('Could not write data to the local storage.');
    }
  }

  unset(key) {
    if (!this.storage) {
      return;
    }
    try {
      this.storage.removeItem(key);
    } catch (e) {
      window.alert('Could not remove item from local storage.');
    }
  }
}

export default new LocalStorage('simple-blogger');
