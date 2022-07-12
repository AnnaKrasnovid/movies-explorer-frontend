class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._getToken(),
        'Content-Type': 'application/json',
       }
    })
    .then(this._checkResponseStatus)
  }

  updateProfileInfo(name, email) {
    return fetch (`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._getToken(),
        'Content-Type': 'application/json',
       },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(this._checkResponseStatus)
  }

  getSavedMoviesList() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: this._getToken(),
        'Content-Type': 'application/json',
       }
    })
    .then(this._checkResponseStatus)
  }

  addMovieToSaved(movie) {
    return fetch (`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: this._getToken(),
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(movie)
    })
    .then(this._checkResponseStatus)
  }


  deleteMovieLike(data) {
    return fetch (`${this._baseUrl}/movies/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._getToken(),
        'Content-Type': 'application/json',
       },
    })
    .then(this._responseStatus)
  }

  _getToken() {
    return `Bearer ${localStorage.getItem('token')}`
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

const apiMain = new MainApi({
  baseUrl: 'https://api.movies.krasnovid.nomoredomains.work',
});

export default apiMain;
