import './MoviesCard.css';
import Movie from '../../images/movie.jpg';

function MoviesCard() {
  return (
    <>
    <li className="movies-card" >
      <img className="movies-card__poster" src={Movie} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">Баския: Взрыв реальности</h2>
        <button className="movies-card__like-movie" type="button"></button>
        <button className="movies-card__delete-movie" type="button"></button>
      </div>
      <p className="movies-card__duration">1ч 42м</p>
    </li>
    <li className="movies-card" >
      <img className="movies-card__poster" src={Movie} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">Баския: Взрыв реальности</h2>
        <button className="movies-card__like-movie" type="button"></button>
        <button className="movies-card__delete-movie" type="button"></button>
      </div>
      <p className="movies-card__duration">1ч 42м</p>
    </li>
    <li className="movies-card" >
      <img className="movies-card__poster" src={Movie} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">Баския: Взрыв реальности</h2>
        <button className="movies-card__like-movie" type="button"></button>
        <button className="movies-card__delete-movie" type="button"></button>
      </div>
      <p className="movies-card__duration">1ч 42м</p>
    </li>
    </>
  )
}

export default MoviesCard;
