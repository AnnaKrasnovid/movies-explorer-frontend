import './MoviesCard.css';
import Movie from '../../images/movie.jpg';

function MoviesCard() {
  return (
    <li className="movies-card" >
      <img className="movies-card__photo" src={Movie} alt="Постер фильма" />
      <button className="movies-card__close" type="button"></button>
      <div className="movies-card__container">
        <h2 className="movies-card__title"></h2>
        <button className="movies-card__like" type="button"></button>
      </div>
    </li >
  )
}

export default MoviesCard;
