import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <main className="movies-page">
      <SearchForm onFindMovies={props.onFindMovies}/>
     {/*<MoviesCardList movies={props.movies}/>*/}
    </main>
  )
}

export default SavedMovies;
