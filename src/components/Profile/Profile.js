import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <fieldset className="profile__container">
      <div className="profile__box">
          <label className="profile__label" for="name-input">Имя</label>
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
          <label className="profile__label" for="email-input">E-mail</label>
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

      <Link className="link link_type_profile">Редактировать</Link>
      <Link className="link link_type_logout">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile;

