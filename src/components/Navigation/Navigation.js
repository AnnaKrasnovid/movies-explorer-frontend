import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/signup' className='navigation__link'>Регистрация</Link>
      <Link to='/signin' className='navigation__link'>
        <button className='button' >Войти</button>
      </Link>
    </div>
  )
}

export default Navigation;
