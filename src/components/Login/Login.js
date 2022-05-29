import '../Register/Register.css';
import Logo from '../Logo/Logo';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import React from 'react';

function Login(props) {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    props.handleLogin({
      password: values.password,
      email: values.email,
    });
    //setValues('');
    //setIsValid(false);
  }

  return (
    <section className="entrance">
      <Logo />
      <h2 className="entrance__title">Рады видеть!</h2>
      <form className="form form_type_register" onSubmit={handleSubmit}>
        <fieldset className="form__container">
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
              maxLength="40"
              value={values.email || ''}
              onChange={handleChange}
            />
            <span id="email-input-error" className="form__error">{errors.email || ''}</span>
          </div>

          <div className="form__input-container">
            <label className="form__label" htmlFor="password-input">Пароль</label>
            <input
              id="password-input"
              className="form__input form__input_info_password"
              type="password"
              name="password"
              placeholder="Пароль"
              autoComplete="on"
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span id="password-input-error" className="form__error">{errors.password || ''}</span>
          </div>
        </fieldset>

        <Error errorStarusCode={props.errorStarusCode} isSuccessfulRequest={props.isSuccessfulRequest}/>
        <button className={`button button_type_form hover-button ${!isValid ? "button_disabled" : ""}`} type="submit" disabled={!isValid} >Войти</button>
        <div className="form__link-container">
          <p className="form__question">Ещё не зарегистрированы?</p>
          <Link to="signup" className="link link_type_entrance hover-link">Регистрация</Link>
        </div>
      </form>

    </section>
  )
}

export default Login;
