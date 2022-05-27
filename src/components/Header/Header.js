import './Header.css';
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useLocation, Route } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  const endpoints = [
    "/",
    "/profile",
    "/movies",
    "/saved-movies",
  ];

  return (
    <Route exact path={endpoints}>
        <header className={`header ${(location.pathname === '/') ? '' : 'header_type_logged-in'}`}>
          <Logo />
          <Navigation loggedIn={props.loggedIn} />
        </header>
      </Route>
  )
}

export default Header;
