import './MoviesCard.css';
import React from 'react';
import { handleDuration } from '../../utils/utils';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //const isLikedMovies = props.movie.find(i => i === currentUser._id);
 // const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`
 const location = useLocation();
 //const savedMoviesCurrentUser = props.savedMovies.some(movei => movei.owner === currentUser._id)
 //const isLikedMovies = `movies-card__like-movie hover-button ${savedMoviesCurrentUser ? 'movies-card__like-movie_active' : ''}`

function handleSaveMovie() {
  const newMovie = {
    country: props.movie.country || 'Нет данных',
    director: props.movie.director,
    duration: props.movie.duration,
    year: props.movie.year,
    description: props.movie.description,
    image: `https://api.nomoreparties.co/${props.movie.image.url}`,
    trailerLink: props.movie.trailerLink,
    nameRU: props.movie.nameRU || 'Нет данных',
    nameEN: props.movie.nameEN || 'Нет данных',
    thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
    movieId: props.movie.id
  }
  props.onSaveMovie(newMovie)
  /*console.log(props.movie)
  console.log(props.movie.trailerLink)
  console.log(typeof props.movie.trailerLink)
  console.log( props.movie.nameRU)*/
}

  return (
    <li className="movies-card" >
      <img className="movies-card__poster" src={(location.pathname === '/movies') ? `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">{props.movie.nameRU}</h2>
        <button className="movies-card__like-movie hover-button"  type="button" onClick={handleSaveMovie}></button>
      </div>
      <p className="movies-card__duration">{handleDuration(props.movie.duration)}</p>
    </li>
  )
}

export default MoviesCard;
