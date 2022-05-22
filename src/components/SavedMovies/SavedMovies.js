import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <main className="movies-page">
      <SearchForm onFindMovies={props.onFindMovies} />
      <MoviesCardList
      allMovies={props.allMovies}
        movies={props.movies} // сохраненные фильмы
        savedMovies={props.savedMovies}
        foundMoviesInSavedMovies={props.foundMoviesInSavedMovies}
        onMovieSearch={props.onMovieSearch}
        onDeleteMovie={props.onDeleteMovie}
        isLikeMovies={props.isLikeMovies}
        isError={props.isError}
      />
    </main>
  )
}

export default SavedMovies;
