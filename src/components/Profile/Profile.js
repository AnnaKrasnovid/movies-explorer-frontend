
import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { values, handleChange, setValues } = useFormValidation();

  const currentUser = React.useContext(CurrentUserContext);
  const [isInputActive, setIsInputActive] = React.useState(false);
  const [isInputDataChanged, setIsInputDataChanged] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email
      })
    }
  }, [currentUser, setValues])

  function handleEditProfile() {
    setIsInputActive(true)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUserInfo(
      values.name,
      values.email,
    )
    setIsInputDataChanged(false)
  }

  function handleChangeUpdateUser(e) {
    handleChange(e)
    setIsInputDataChanged(true)
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
              onChange={handleChangeUpdateUser}
              disabled={!isInputActive}>
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
              onChange={handleChangeUpdateUser}
              disabled={!isInputActive}>
            </input>
          </div>
        </fieldset>

        {!isInputDataChanged ? (
          <div className="profile__link-container">
            <button className="button link link_type_profile hover-link" type="button" onClick={handleEditProfile}>Редактировать</button>
            <Link to="/" className="link link_type_logout hover-link" onClick={props.logout}>Выйти из аккаунта</Link>
          </div>
        ) : (
          <div className="profile__button-container">
            <span className="profile__error"></span>
            <button className="button button_type_form hover-button" type="submit" >Сохранить</button>
          </div>
        )}
      </form>

    </section>
  )
}

export default Profile;

