import '../Entrance/Entrance.css';
import Logo from '../../images/icon-logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="entrance">
      <Link to='/' className="link">
        <img className="logo" src={Logo} alt="Логотип" />
      </Link>
      <h2 className="entrance__title">Рады видеть!</h2>
      <form className="form form_type_register">
        <fieldset className="form__container">

          <div className="form__input-container">
            <label className="form__label" for="email-input">E-mail</label>
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
            <label className="form__label" for="password-input">Пароль</label>
            <input
              id="password-input"
              className="form__input form__input_info_password"
              type="password"
              name="password"
              placeholder="Пароль"
              required />
            <span id="password-input-error" className="form__error">Что-то пошло не так...</span>
          </div>

        </fieldset>

        <button className="button button_type_form hover-button" type="submit">Войти</button>
        <div className="form__link-container">
          <p className="form__question">Ещё не зарегистрированы?</p>
          <Link to="signup" className="link link_type_entrance hover-link">Регистрация</Link>
        </div>
      </form>

    </section>
  )
}

export default Login;
