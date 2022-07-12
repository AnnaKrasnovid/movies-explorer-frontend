import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import React from 'react';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function MoviesCardList(props) {
  const location = useLocation();
  const locationMovies = location.pathname === '/movies';
  const moviesSaved = props.onMovieSearch ? props.foundMoviesInSavedMovies : props.movies;

  const windowWidth = () => { return window.innerWidth };
  const [size, setSize] = React.useState(windowWidth());

  const [numberOfCards, setNumberOfCards] = React.useState(0);
  const [showMoreCards, setShowMoreCards] = React.useState(0);
  const [moviesToRender, setMoviesToRender] = React.useState([]);

  React.useEffect(() => {
    let timeOut;

    function handleResize() {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => { setSize(windowWidth()) }, 1000);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  React.useEffect(() => {
    handleShowCards()
  }, [size, numberOfCards, showMoreCards]);

  React.useEffect(() => {
    if (size >= 1280) {
      setNumberOfCards(12);
      setShowMoreCards(4);
    } else if (size > 480 && size < 1280) {
      setNumberOfCards(8);
      setShowMoreCards(2);
    } else if (size > 320 && size <= 480) {
      setNumberOfCards(5);
      setShowMoreCards(2);
    }
  }, [size, props.movies]);

  function handleShowCards() {
    const numberOfFilmsToBeShown = props.movies.slice(0, numberOfCards);
    setMoviesToRender(numberOfFilmsToBeShown);
  }

  function handleButtonClickShowMore() {
    const remained = props.movies.length - moviesToRender.length;

    if (remained > 0) {
      const movie = props.movies.slice(moviesToRender.length, moviesToRender.length + showMoreCards);
      setMoviesToRender([...moviesToRender, ...movie]);
    }
  }

  function getFoundMoviesList() {
    return moviesToRender.map((movie) => {
     const like = props.savedMovies.find(i => {return i.movieId === movie.id})

      return (
        <MoviesCard
          key={movie.id}
          movie={movie}
          savedMovies={props.savedMovies}
          onSaveMovie={props.onSaveMovie}
          onDeleteMovie={props.onDeleteMovie}
          isLikeMovies={like}
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
        />
      ))
    )
  }

  return (
    <section className="movies">
      {(props.isError || props.isNothingFound) ? (
        props.isError ? (<span className="movies__error">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </span>) : (<span className="movies__error">Ничего не найдено</span>)
      ) : (
        <>
          <ul className="movies-list movies-list_type_saved">
            {locationMovies ? getFoundMoviesList() : getSavedMoviesList()}
          </ul>

          {locationMovies ? (
            <ShowMoreButton
              isNothingFound={props.isNothingFound}
              movies={props.movies}
              onShowMore={handleButtonClickShowMore}
              moviesToRender={moviesToRender} />
          ) : ""}
        </>
      )}
    </section>
  )
}

export default MoviesCardList;


