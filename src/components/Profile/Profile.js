import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditProfile() {
    setIsEditing(true)
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <fieldset className="profile__container">
        <div className="profile__box">
          <label className="profile__label" htmlFor="name-input">Имя</label>
          <input
            id="name-input"
            className="profile__input"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="3"
            maxLength="40">
          </input>
        </div>

        <div className="profile__box">
          <label className="profile__label" htmlFor="email-input">E-mail</label>
          <input
            id="email-input"
            className="profile__input"
            type="email"
            name="email"
            placeholder="E-mail"
            required>
          </input>
        </div>
      </fieldset>

      {!isEditing ? (
        <div className="profile__link-container">
        <button className="button link link_type_profile hover-link" onClick={handleEditProfile}>Редактировать</button>
        <Link to="/" className="link link_type_logout hover-link">Выйти из аккаунта</Link>
      </div>
      ) : (
        <div className="profile__button-container">
        <span className="profile__error"></span>
        <button className="button button_type_form hover-button" type="submit">Сохранить</button>
      </div>
      )}
    </section>
  )
}

export default Profile;

