import './Header.css';
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
  console.log(location);
  const header = `header ${(location.pathname === '/') ? '' : 'header_type_logged-in'}`;

  return (
    <Route exact path={endpoints}>
      <header className={header}>
        <Logo />
        <Navigation />
      </header>
    </Route>

  )
}

export default Header;
