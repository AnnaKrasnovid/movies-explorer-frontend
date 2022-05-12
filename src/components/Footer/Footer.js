import './Footer.css';
import { Route } from 'react-router-dom';

function Footer() {
  const endpoints = [
    "/",
    "/movies",
    "/saved-movies"
  ];

  return (
    <Route exact path={endpoints}>
      <footer className="footer">
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__container">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="social-networks social-networks_type_footer">
            <li>
              <a className="social-networks__link social-networks__link_type_footer hover-link" href="https://practicum.yandex.ru/web/" target="blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="social-networks__link social-networks__link_type_footer hover-link" href="https://github.com/AnnaKrasnovid" target="blank">Github</a>
            </li>
            <li>
              <a className="social-networks__link social-networks__link_type_footer hover-link" href="https://github.com/AnnaKrasnovid" target="blank">Facebook</a>
            </li>
          </ul>
        </div>
      </footer>
    </Route>
  )
}

export default Footer;
