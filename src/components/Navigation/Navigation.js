import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  /*const location = useLocation()
  //console.log(location)

  function headerLocation() {
      if (location.pathname === '/signin') {
          return <Link to='/signup' className='header__link hover-button'>Регистрация</Link>
      } else if (location.pathname === '/signup') {
          return <Link to='/signin' className='header__link hover-button'>Войти</Link>
      } else {
          return <Link to='/signin' className='header__link hover-button' onClick={props.logout}>Выйти</Link>
      }
  }*/

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
