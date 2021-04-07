class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // GET /cards
  getCardList() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(res);
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // GET /users/me
  getUserInfo() {
    // return fetch(this._baseUrl + '/users/me', {
    //   headers: this._headers,
    // }).then((res) => {
    //   if (res.ok) {
    //     return res.json();
    //   } else {
    //     return Promise.reject('Error! ' + res.statusText);
    //   }
    // });
  }

  // PATCH users/me
  setUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // PATCH /users/me/avatar
  setUserAvatar(data) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // POST /cards
  addCard(data) {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        console.log(res, 'res');
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // DELETE /cards/cardId
  removeCard(cardId) {
    return fetch(this._baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  updateLikes(cardId, liked) {
    console.log(cardId, liked, 'likes');
    let method = 'DELETE';
    if (liked) method = 'PUT';
    return fetch(this._baseUrl + '/cards/likes/' + cardId, {
      method: method,
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Error! ' + res.statusText);
    });
  }
}

export default new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
