import './NavTab.css';

function Navtab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__point">
          <a className="nav-tab__link hover-link" href="#about-project">О проекте</a>
        </li>
        <li className="nav-tab__point">
          <a className="nav-tab__link hover-link" href="#techs">Технологии</a>
        </li>
        <li className="nav-tab__point">
          <a className="nav-tab__link hover-link" href="#about-me">Студент</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navtab;
