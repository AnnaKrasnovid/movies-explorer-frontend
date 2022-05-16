import './MoviesCard.css';
import { handleDuration } from '../../utils/utils';

function MoviesCard(props) {


  return (
    <li className="movies-card" >
      <img className="movies-card__poster" src={`https://api.nomoreparties.co/${props.movie.image.url}`} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">{props.movie.nameRU}</h2>
        <button className="movies-card__like-movie hover-button movies-card__like-movie_active" type="button"></button>
      </div>
      <p className="movies-card__duration">{handleDuration(props.movie.duration)}</p>
    </li>
  )
}

export default MoviesCard;
