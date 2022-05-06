import './Logo.css';
import LogoImg from '../../images/icon-logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img className="logo hover-button" src={LogoImg} alt="Логотип" />
    </Link>
  )
}

export default Logo;
