
import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  function handleEditProfile() {
    setIsEditing(true)
  }

  const { values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setErrors,
    setIsValid } = useFormValidation();

    function handleSubmit() {
      console.log(currentUser)
      console.log(currentUser.name)
      //e.preventDefault();
      /*props.handleUpdateUserInfo({
          name: values.name,
          email: values.email,
      })*/

  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmit}>
      <fieldset className="profile__container" >
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
            maxLength="40"
            value={values.name || ''}
            onChange={handleChange}>
              {/*currentUser.name*/ }
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
            required
            value={values.email || ''}
            onChange={handleChange}>
              {/*currentUser.email*/}
          </input>
        </div>
      </fieldset>
      </form>
      {!isEditing ? (
        <div className="profile__link-container">
        <button className="button link link_type_profile hover-link" onClick={handleEditProfile}>Редактировать</button>
        <Link to="/" className="link link_type_logout hover-link">Выйти из аккаунта</Link>
      </div>
      ) : (
        <div className="profile__button-container">
        <span className="profile__error"></span>
        <button className="button button_type_form hover-button" type="submit" >Сохранить</button>
      </div>
      )}
    </section>
  )
}

export default Profile;

