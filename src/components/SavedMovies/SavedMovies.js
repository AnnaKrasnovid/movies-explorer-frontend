import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <SearchForm onFindMovies={props.onFindMovies} />

      {props.isLoading ? <Preloader /> : (
        <MoviesCardList
          allMovies={props.allMovies}
          movies={props.movies}
          savedMovies={props.savedMovies}
          foundMoviesInSavedMovies={props.foundMoviesInSavedMovies}
          onMovieSearch={props.onMovieSearch}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={props.isLikeMovies}
          isError={props.isError}
          isNothingFound={props.isNothingFound}
          onFindMovies={props.onFindMovies}
        />
      )}
    </main>
  )
}

export default SavedMovies;


