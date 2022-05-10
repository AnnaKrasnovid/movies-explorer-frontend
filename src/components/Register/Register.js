import './Register.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="entrance">
      <Logo />
      <h2 className="entrance__title">Добро пожаловать!</h2>
      <form className="form form_type_register">
        <fieldset className="form__container">
          <div className="form__input-container">
            <label className="form__label" htmlFor="name-input">Имя</label>
            <input
              id="name-input"
              className="form__input form__input_info_name"
              type="text"
              name="name"
              placeholder="Имя пользователя"
              required
              minLength="3"
              maxLength="40" />
            <span id="name-input-error" className="form__error"></span>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="email-input">E-mail</label>
            <input
              id="email-input"
              className="form__input form__input_info_email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
              minLength="3"
              maxLength="40" />
            <span id="email-input-error" className="form__error"></span>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="password-input">Пароль</label>
            <input
              id="password-input"
              className="form__input form__input_info_password"
              type="password"
              name="password"
              placeholder="Пароль"
              required />
            <span id="password-input-error" className="form__error"></span>
          </div>
        </fieldset>

        <button className="button button_type_form hover-button" type="submit">Зарегистрироваться</button>
        <div className="form__link-container">
          <p className="form__question">Уже зарегистрированы?</p>
          <Link to="signin" className="link link_type_entrance hover-link">Войти</Link>
        </div>
      </form>
    </section>
  )
}

export default Register;
