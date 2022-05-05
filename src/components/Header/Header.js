import './Header.css';
import Logo from '../../images/icon-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header header_type_logged-in">
      <Link to="/">
        <img className="logo hover-button" src={Logo} alt="Логотип" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header;
