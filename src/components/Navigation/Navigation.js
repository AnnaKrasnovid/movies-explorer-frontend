import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  /*const location = useLocation()
  //console.log(location)

  function headerLocation() {
      if (location.pathname === '/signin') {
          return <Link to='/signup' className='header__link hover-button'>Регистрация</Link>
      } else if (location.pathname === '/signup') {
          return <Link to='/signin' className='header__link hover-button'>Войти</Link>
      } else {
          return <Link to='/signin' className='header__link hover-button' onClick={props.logout}>Выйти</Link>
      }
  }*/

  return (
    <div className="navigation navigation_type_logged-in">
      <Link to="/movies" className="link link_type_logged-in hover-link">Фильмы</Link>
      <Link to="/saved-movies" className="link link_type_logged-in hover-link">Сохранённые фильмы</Link>
      <Link to="/profile" className="link link_type_account hover-link">
        <p className="navigation__account">Аккаунт</p>
        <div className="navigation__account-icon"></div>
      </Link>
    </div>
  )
}

export default Navigation;
/*<Link to='/signup' className="link link_type_main hover-link">Регистрация</Link>
      <Link to='/signin' className="link">
        <button className="button button_type_header hover-button" >Войти</button>
      </Link>*/
/*<Link to="/movies" className="link link_type_logged-in hover-link">Фильмы</Link>
      <Link to="/saved-movies" className="link link_type_logged-in hover-link">Сохранённые фильмы</Link>
      <div className="navigation__container">
        <p className="navigation__account">Аккаунт</p>
        <div className="navigation__account-icon"></div>
      </div>*/
