import './Header.css';
import Logo from '../../images/icon-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  console.log(location);
  const header = `header ${(location.pathname === '/') ? '' : 'header_type_logged-in'}`;

  return (
    <header className={header}>
      <Link to="/">
        <img className="logo hover-button" src={Logo} alt="Логотип" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header;
