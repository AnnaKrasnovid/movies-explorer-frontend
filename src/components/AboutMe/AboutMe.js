import './AboutMe.css';
import Photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__photo" src={Photo} alt="Фотография автора" />
        <div className="about-me__description">
          <h3 className="about-me__title">Анна</h3>
          <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="social-networks">
            <li>
              <a className="social-networks__link hover-link" href="#" target="blank">Facebook</a>
            </li>
            <li>
              <a className="social-networks__link hover-link" href="https://github.com/AnnaKrasnovid" target="blank">Github</a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default AboutMe;
