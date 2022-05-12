import './Header.css';
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation, Route } from 'react-router-dom';

function Header() {

  const endpoints = [
    "/",
    "/profile",
    "/movies",
    "/saved-movies",
  ];

  const location = useLocation();

  return (
    <Route exact path={endpoints}>
      <header className={`header ${(location.pathname === '/') ? '' : 'header_type_logged-in'}`}>
        <Logo />
        <Navigation />
      </header>
    </Route>

  )
}

export default Header;
