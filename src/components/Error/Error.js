import './Error.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Error(props) {
  const location = useLocation()
  const locationRegistration = location.pathname === '/signup';
  const locationLogin = location.pathname === '/signin';
  const locationProfile = location.pathname === '/profile';

  const [isRegistrationError, setIsRegistrationError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    handleErrorRegistration()
  }, [props.errorStarusCode, isRegistrationError, errorMessage]);


  function handleErrorRegistration() {
    const statusCode = Number(props.errorStarusCode.slice(8));

    if (locationRegistration) {
      if (statusCode) {
        switch (statusCode) {
          case 500:
            setIsRegistrationError(true);
            setErrorMessage('При регистрации пользователя произошла ошибка');
            break;
          case 409:
            setIsRegistrationError(true);
            setErrorMessage('Пользователь с таким email уже существует');
            break;
          case 400:
            setIsRegistrationError(true);
            setErrorMessage('При регистрации произошла ошибка. Проверьте корректность введеного email');
            break;
          default:
            setIsRegistrationError(true);
            setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
            break;
        }
      }
    } else if (locationLogin) {
      if (statusCode) {
        switch (statusCode) {
          case 500:
            setIsRegistrationError(true);
            setErrorMessage('На сервере произошла ошибка');
            break;
          case 409:
            setIsRegistrationError(true);
            setErrorMessage('Пользователь с таким email уже существует');
            break;
          case 401:
            setIsRegistrationError(true);
            setErrorMessage('Вы ввели неправильный логин или пароль');
            break;
          case 400:
            setIsRegistrationError(true);
            setErrorMessage('При регистрации произошла ошибка. Проверьте корректность введеного email');
            break;
          default:
            setIsRegistrationError(true);
            setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
            break;
        }
      }
    } else if (locationProfile) {
      if (statusCode) {
        switch (statusCode) {
          case 500:
            setIsRegistrationError(true);
            setErrorMessage('При обновлении пользователя произошла ошибка');
            break;
          case 409:
            setIsRegistrationError(true);
            setErrorMessage('Пользователь с таким email уже существует');
            break;
          case 401:
            setIsRegistrationError(true);
            setErrorMessage('Вы ввели неправильный логин или пароль');
            break;
          case 400:
            setIsRegistrationError(true);
            setErrorMessage('При редактировании профиля произошла ошибка. Проверьте имя и email');
            break;
          default:
            setIsRegistrationError(true);
            setErrorMessage('Произошла ошибка. Попробуйте немного позже.');
            break;
        }
      }
    }
  }

  return (
    <>
      <span className="error">{props.isSuccessfulRequest ? '' : errorMessage}</span>
    </>
  )
}

export default Error;
