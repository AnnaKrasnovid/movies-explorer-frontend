import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
//import { sortingArrayId } from '../../utils/utils';
import React from 'react';

function MoviesCardList(props) {
  const location = useLocation();
  const moviesSaved = props.onMovieSearch ? props.foundMoviesInSavedMovies : props.movies;

  function addLikeMovie(movie) {
    const arraySavedMovieId = [];
    props.savedMovies.map(item => arraySavedMovieId.push(item.movieId));
    const stringSavedMovieId = String(arraySavedMovieId);
    const like = stringSavedMovieId.includes(movie.id);
    console.log(like)
    return like;
  }

  function getFoundMoviesList() {
    return props.movies.map((movie) => {
      const like = addLikeMovie(movie)

      return (
        <MoviesCard
          key={movie.id}
          movie={movie}
          savedMovies={props.savedMovies}
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={like}

        // onLiked={props.onLiked}
        />
      )
    })
  }

  function getSavedMoviesList() {
    return (
      moviesSaved.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          savedMovies={props.savedMovies}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={true}

        // onLiked={props.onLiked}
        />
      ))
    )
  }

  return (
    <section className="movies">

      {props.isError ? (
        <span className="movies__error">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </span>
      ) : (
        <ul className="movies-list movies-list_type_saved">
          {(location.pathname === '/movies') ? getFoundMoviesList() : getSavedMoviesList()}
        </ul>
      )}

    </section>
  )
}

export default MoviesCardList;
