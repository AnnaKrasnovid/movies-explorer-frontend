import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { sortingArrayId } from '../../utils/utils';

function MoviesCardList(props) {
  const location = useLocation();
  const moviesSaved = props.onMovieSearch ? props.foundMoviesInSavedMovies : props.movies;

  function getFoundMoviesList() {
    return props.movies.map((movie) => {
      const like = sortingArrayId(props.savedMovies, movie)

      return (
        <MoviesCard
          key={movie.id}
          movie={movie}
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={like ? true : false}
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
          onDeleteMovie={props.onDeleteMovie}
          // savedMovies={props.savedMovies}
          //isLikeMovies={props.isLikeMovies}
          isLikeMovies={true}
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
