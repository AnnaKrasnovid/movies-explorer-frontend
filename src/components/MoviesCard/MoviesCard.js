import './MoviesCard.css';
import React from 'react';
import { handleDuration } from '../../utils/utils';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();
  //const likeMovie = props.isLikeMovies.includes(props.movies.id)
  const isLikedMovies = `movies-card__like-movie hover-button ${props.isLikeMovies ? 'movies-card__like-movie_active' : ''}`
  //const isLikedMovies = props.savedMovies.includes()


  function handleSaveMovie() {
    //setIsLikeMovie(true)
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
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    props.onDeleteMovie(props.movie)
  }

  return (
    <li className="movies-card" >
      <img className="movies-card__poster" src={(location.pathname === '/movies') ? `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image} alt="Постер фильма" />
      <div className="movies-card__container">
        <h2 className="movies-card__title">{props.movie.nameRU}</h2>
        <button className={isLikedMovies} onClick={!props.isLikeMovies ? handleSaveMovie : handleDeleteMovie}></button>
      </div>
      <p className="movies-card__duration">{handleDuration(props.movie.duration)}</p>
    </li>
  )
}

export default MoviesCard;
