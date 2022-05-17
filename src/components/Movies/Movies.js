import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Preloader from '../Preloader/Preloader';


function Movies(props) {


  return (
    <main className="movies-page">
      <SearchForm
        onFindMovies={props.onFindMovies}
        onCheckbox={props.onCheckbox}
      />
      {props.isLoading ? <Preloader /> :(


        <>
        <MoviesCardList movies={props.movies} />
        {(props.movies.length > 4) ? <ShowMoreButton /> : ''}
        </>



      )}
    </main>
  )
}


export default Movies;
