import './Header.css';
import Logo from '../../images/icon-logo.svg';
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Логотип" />
      <Navigation />
    </header>
  )
}

export default Header;
