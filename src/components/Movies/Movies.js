import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  return (
    <main className="movies-page">
      <SearchForm onFindMovies={props.onFindMovies} />
      {props.isLoading ? <Preloader /> : (
        <MoviesCardList
          allMovies={props.allMovies}
          movies={props.movies} //найденные фильмы
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={props.isLikeMovies}
          savedMovies={props.savedMovies}
          isError={props.isError}
          isNothingFound={props.isNothingFound}
        />
      )}

    </main>
  )
}


export default Movies;
