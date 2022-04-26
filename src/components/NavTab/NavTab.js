import './NavTab.css';

function Navtab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__point">
        <a className="nav-tab__link">О проекте</a>
      </li>
      <li className="nav-tab__point">
        <a className="nav-tab__link">Технологии</a>
      </li>
      <li className="nav-tab__point">
        <a className="nav-tab__link">Студент</a>
      </li>
    </ul>
  )
}

export default Navtab;
