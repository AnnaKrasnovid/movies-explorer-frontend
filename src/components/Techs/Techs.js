import './Techs.css';

function Techs() {
  return (
    <section className="techs section-side-padding">
      <h2 className="section-title">Технологии</h2>
      <div className="techs__container">
        <h3 className="blok-title">7 технологий</h3>
        <p className="blok-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="techs-list">
          <li className="techs-list__title">HTML</li>
          <li className="techs-list__title">CSS</li>
          <li className="techs-list__title">JS</li>
          <li className="techs-list__title">React</li>
          <li className="techs-list__title">Git</li>
          <li className="techs-list__title">Express.js</li>
          <li className="techs-list__title">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
