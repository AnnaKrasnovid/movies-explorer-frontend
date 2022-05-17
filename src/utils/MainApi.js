class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /*getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(this._responseStatus)
  }*/

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(this._responseStatus)
  }

  /*setProfileInfo(data) {
    return fetch (`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._responseStatus)
  }

  setNewCard(data) {
    return fetch (`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(this._responseStatus)
  }

  setUserAvatar(data) {
    return fetch (`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._responseStatus)
  }

  putLike(data) {
    return fetch (`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._responseStatus)
  }

  deleteLike(data) {
    return fetch (`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._responseStatus)
  }

  removeCard(data) {
    return fetch (`${this._baseUrl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._responseStatus)
  }*/

  _responseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

const apiMain = new MainApi({
  baseUrl: 'https://api.movies.krasnovid.nomoredomains.work',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  }
})

export default apiMain;
