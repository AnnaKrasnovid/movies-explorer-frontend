import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
  const location = useLocation();
  const moviesSaved = props.onMovieSearch ? props.foundMoviesInSavedMovies : props.movies;

  function getFoundMoviesList() {
    return (
      props.movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
          onSaveMovie={props.onSaveMovie} />
      ))
    )
  }

  function getSavedMoviesList() {
    return (
      moviesSaved.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          /*savedMovies={props.savedMovies}*/
        />
      ))
    )
  }

  return (
    <section className="movies">
      <ul className="movies-list movies-list_type_saved">
        {(location.pathname === '/movies') ? getFoundMoviesList() : getSavedMoviesList()}
      </ul>
    </section>
  )
}

export default MoviesCardList;
