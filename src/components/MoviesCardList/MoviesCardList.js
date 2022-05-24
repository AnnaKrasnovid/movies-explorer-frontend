import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
//import { sortingArrayId } from '../../utils/utils';
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
  }, [size]);

  function handleShowCards() {
    const num = props.movies.length;
    const numberOfFilmsToBeShown = props.movies.slice(0, numberOfCards);
    setMoviesToRender(numberOfFilmsToBeShown);
  }

  function handleButtonClickShowMore() {
    const remained = props.movies.length - moviesToRender.length;
    //console.log(remained)
    if (remained > 0) {
      const movie = props.movies.slice(moviesToRender.length, moviesToRender.length + showMoreCards);
      setMoviesToRender([...moviesToRender, ...movie]);
    }
  }

  React.useEffect(() => {
    let timeOut;

    function handleResize() {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => { setSize(windowWidth()) }, 1000);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  function addLikeMovie(movie) {
    const arraySavedMovieId = [];
    props.savedMovies.map(item => arraySavedMovieId.push(item.movieId));
    const stringSavedMovieId = String(arraySavedMovieId);
    const like = stringSavedMovieId.includes(movie.id);
    return like;
  }

  function getFoundMoviesList() {
    return moviesToRender.map((movie) => {
      const like = addLikeMovie(movie);

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
      { locationMovies ? ((props.isError || props.isNothingFound) ? (
        props.isError ? (<span className="movies__error">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </span>) : (<span className="movies__error">Ничего не найдено</span>)
      ) : (
        <>
          <ul className="movies-list movies-list_type_saved">
            {getFoundMoviesList()}
          </ul>
            <ShowMoreButton
              isNothingFound={props.isNothingFound}
              movies={props.movies}
              onShowMore={handleButtonClickShowMore}
              moviesToRender={moviesToRender}
              />
        </>
      )) : (
        (props.isError || props.isNothingFound) ? (
          props.isError ? (<span className="movies__error">Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз
          </span>) : (<span className="movies__error">Ничего не найдено</span>)
        ) : (
          <>
            <ul className="movies-list movies-list_type_saved">
              {getSavedMoviesList()}
            </ul>
          </>
        )
      )}





    </section>
  )
}

export default MoviesCardList;


/*{(props.isError || props.isNothingFound) ? (
        props.isError ? (<span className="movies__error">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </span>) : (<span className="movies__error">Ничего не найдено</span>)
      ) : (
        <>
          <ul className="movies-list movies-list_type_saved">
            {(location.pathname === '/movies') ? getFoundMoviesList() : getSavedMoviesList()}
          </ul>

          {(location.pathname === '/movies') ? (
            <ShowMoreButton
              isNothingFound={props.isNothingFound}
              movies={props.movies}
              onShowMore={handleButtonClickShowMore}
              moviesToRender={moviesToRender} />
          ) : ""}
        </>
      )} */
