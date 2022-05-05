import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__box">
          <p className="portfolio__website">Статичный сайт</p>
          <a className="portfolio__link hover-link" href="https://annakrasnovid.github.io/how-to-learn/" target="blank"></a>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__website">Адаптивный сайт</p>
          <a className="portfolio__link hover-link" href="https://annakrasnovid.github.io/russian-travel/" target="blank"></a>
        </li>
        <li className="portfolio__box">
          <p className="portfolio__website">Одностраничное приложение</p>
          <a className="portfolio__link hover-link" href="https://annakrasnovid.github.io/react-mesto-auth/" target="blank"></a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
