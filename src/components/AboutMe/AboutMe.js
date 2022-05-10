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
          <p className="about-me__info">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__text">Живу в Подмосковье, по образованию- инженер. В свободное время занимаюсь фотографией и делаю pet-project.
           В процессе обучения было реализовано нескольно проектов, которые прошли код-ревью, продолжаю изучать новые технологии.</p>
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
