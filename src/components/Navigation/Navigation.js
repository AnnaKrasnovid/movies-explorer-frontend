import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className="navigation">
      {props.loggedIn ?
        (<>
          <button className="button button-burger" onClick={handleMenuOpen}></button>
          <nav className={`navigation__container-menu ${isMenuOpen ? "navigation__container-menu_opened" : ""}`} onClick={handleMenuClose}>
            <ul className="navigation__container navigation__container_type_logged-in" onClick={e => { e.stopPropagation() }}>
              <div className="navigation__box">
                <li>
                  <NavLink
                    exact to="/"
                    className="link link_type_logged-in hover-link"
                    onClick={handleMenuClose}>
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/movies"
                    className="link link_type_logged-in hover-link"
                    activeClassName="link_active"
                    onClick={handleMenuClose}>
                    Фильмы
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/saved-movies"
                    className="link link_type_logged-in hover-link"
                    activeClassName="link_active"
                    onClick={handleMenuClose}>
                    Сохранённые фильмы
                  </NavLink>
                </li>
              </div>
              <li>
                <Link to="/profile" className="link link_type_account hover-link" onClick={handleMenuClose}>
                  <p className="navigation__account">Аккаунт</p>
                  <div className="navigation__account-icon"></div>
                </Link>
              </li>
            </ul>
            <button className="button button-close-menu hover-link" onClick={handleMenuClose}></button>
          </nav>
        </>
        ) : (
          <>
            <ul className="navigation__container">
              <li>
                <Link to='/signup' className="link link_type_main hover-link">Регистрация</Link>
              </li>
              <li>
                <Link to='/signin' className="link">
                  <button className="button button_type_header hover-button" >Войти</button>
                </Link>
              </li>
            </ul>
          </>
        )}
    </div>
  )
}

export default Navigation;

