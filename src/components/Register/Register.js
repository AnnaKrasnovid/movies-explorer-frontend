import './Register.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

function Register(props) {
const { values,
  handleChange,
  errors,
  isValid,
  resetForm,
  setValues,
  setErrors,
  setIsValid } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegistration({
        name: values.name,
        email: values.email,
        password: values.password
    })
}

  return (
    <section className="entrance">
      <Logo />
      <h2 className="entrance__title">Добро пожаловать!</h2>
      <form className="form form_type_register" onSubmit={handleSubmit} noValidate>
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
              minLength="2"
              maxLength="40"
              value={values.name || ''}
              onChange={handleChange}
              />
            <span id="name-input-error" className="form__error">{errors.name ? 'Имя должно содержать не менее 2 символов' : ''}</span>
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
              required
              value={values.password || ''}
              onChange={handleChange}/>
            <span id="password-input-error" className="form__error">{errors.password || ''}</span>
          </div>
        </fieldset>

        <button className={`button button_type_form hover-button ${!isValid ? "button_disabled" : ""}`} type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <div className="form__link-container">
          <p className="form__question">Уже зарегистрированы?</p>
          <Link to="signin" className="link link_type_entrance hover-link">Войти</Link>
        </div>
      </form>
    </section>
  )
}

export default Register;
