import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function Movies() {
  return (
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList />
      <ShowMoreButton />
    </main>
  )
}

export default Movies;
