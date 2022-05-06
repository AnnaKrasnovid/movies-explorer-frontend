import './Navigation.css';
//import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation()
  console.log(location)

  function headerLocation() {
    if (location.pathname === '/') {
      return (
        <>
          <Link to='/signup' className="link link_type_main hover-link">Регистрация</Link>
          <Link to='/signin' className="link">
            <button className="button button_type_header hover-button" >Войти</button>
          </Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/movies" className="link link_type_logged-in hover-link">Фильмы</Link>
          <Link to="/saved-movies" className="link link_type_logged-in hover-link">Сохранённые фильмы</Link>
          <Link to="/profile" className="link link_type_account hover-link">
            <p className="navigation__account">Аккаунт</p>
            <div className="navigation__account-icon"></div>
          </Link>
        </>
      )
    }
  }

  return (
    <div className="navigation">
     {headerLocation()}
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
      <Link to="/profile" className="link link_type_account hover-link">
        <p className="navigation__account">Аккаунт</p>
        <div className="navigation__account-icon"></div>
      </Link>*/
