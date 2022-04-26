import './Footer.css';

function Footer() {
  return (
    <section className="footer section-side-padding">
      <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="social-networks">
            <li>
              <a className="social-networks__link social-networks__link_type_footer" href="https://practicum.yandex.ru/web/">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="social-networks__link social-networks__link_type_footer" href="https://github.com/AnnaKrasnovid">Github</a>
            </li>
            <li>
              <a className="social-networks__link social-networks__link_type_footer" href="#">Facebook</a>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Footer;
