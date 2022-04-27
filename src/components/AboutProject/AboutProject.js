import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="section-title">О проекте</h2>
      <div className="about-project__container">
        <p className="about-project__info">Дипломный проект включал 5 этапов</p>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__info">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__duration">
        <p className="about-project__time about-project__time-back">1 неделя</p>
        <p className="about-project__time about-project__time-front">4 недели</p>
        <p className="about-project__time about-project__part">Back-end</p>
        <p className="about-project__time about-project__part">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
