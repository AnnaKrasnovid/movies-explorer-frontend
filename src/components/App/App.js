import './App.css';
import React, { useCallback } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import apiMovies from '../../utils/MoviesApi';
import apiMain from '../../utils/MainApi';
import { handleFoundMovies } from '../../utils/utils';
import * as auth from '../../utils/auth';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]); //  все фильмы с сервера bestMovies
  const [foundMovies, setFoundMovies] = React.useState([]); // найденные фильмы
  const [savedMovies, setSavedMovies] = React.useState([]); //сохраненные фильмы

  const [foundMoviesInSavedMovies, setFoundMoviesInSavedMovies] = React.useState([]); //найденные фильмы в сохраненном
  const [isMovieSearch, setIsMovieSearch] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false); // вошедший в систему
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isUserChecked, setIsUserChecked] = React.useState(false); //проверка наличия пользователя, если есть то переходит в защщищенные роуты

  //const [isLiked, setIsLiked] = React.useState(false);//
  const [isError, setIsError] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(false);

  const history = useHistory();
  const location = useLocation();
  const locationMovies = location.pathname === '/movies';

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.checkToken(token)
        .then(() => {
          setLoggedIn(true);
          setIsUserChecked(true);
        })
        .catch((err) => {
          setIsUserChecked(true);
          console.log(err)
        })
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      apiMain.getProfileInfo()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      apiMain.getSavedMoviesList()
        .then((savedMovies) => {
          const savedMoviesCurrentUser = savedMovies.filter(movie => movie.owner === currentUser._id);
          setSavedMovies(savedMoviesCurrentUser);
          setIsError(false);
        })
        .catch(err => {
          console.log(err);
          setIsError(true);
        })
    }
  }, [loggedIn, currentUser])

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('movies')) && locationMovies) {
      const films = JSON.parse(localStorage.getItem('movies'));

      if (films.length !== 0 ) {
        setFoundMovies(films);
      } /*else {
        setIsNothingFound(true);
      }*/
    }
  }, [])

  function handleRegistration(data) {
    auth.register(data)
      .then(() => {
        history.push("/signin");
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleLogin(data) {
    auth.authorize(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleSearchMovies(query, stateCheckbox) {
    setIsLoading(true)
    apiMovies.getFoundMovies(query)
      .then((movies) => {
        setAllMovies(movies);
        const filteredMovies = handleFoundMovies(query, movies, stateCheckbox);
        setFoundMovies(filteredMovies);
        checkFoundMoviesLength(filteredMovies);
        setIsError(false);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function checkFoundMoviesLength(movies) {
    if (movies.length === 0) {
      setIsNothingFound(true)
    } else {
      setIsNothingFound(false)
    }
  }

  function handleSearchSavedMovies(query, stateCheckbox) {
    setIsLoading(true)
    apiMain.getSavedMoviesList()
      .then((savedMovies) => {
        setIsMovieSearch(true);
        const savedMoviesCurrentUser = savedMovies.filter(movie => movie.owner === currentUser._id);
        const filteredMovies = handleFoundMovies(query, savedMoviesCurrentUser, stateCheckbox);
        setFoundMoviesInSavedMovies(filteredMovies);
        checkFoundMoviesLength(filteredMovies);
        console.log(filteredMovies);
        setIsError(false);
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }


  function handleUpdateUserInfo(name, email) {
    apiMain.updateProfileInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => { console.log(err) })
    //.finally(() => {})
  }


  function sortingArrayId(movie) {
    const arrMoviesId = [];
    savedMovies.map(item => arrMoviesId.push(item.movieId));
    const stringIdMovies = String(arrMoviesId);
    const like = stringIdMovies.includes(movie.id);
    //console.log(like)
    return like;
  }

  function handleAddMovieToSaved(newMovie) {
    apiMain.addMovieToSaved(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies])
        setIsError(false)
      })
      .catch(err => {
        setIsError(true)
        console.log(err)
      })
    //.finally(() => {})
  }

  function handleDeleteSavedMovie(movie) {
    apiMain.deleteMovieLike(movie)
      .then((movie) => {
        //const deleteMovie = (cards) => cards.filter((m) => (m._id !== movie._id))
        setSavedMovies((cards) => cards.filter((m) => (m._id !== movie._id)));
        // setIsLiked(false)

        console.log(movie._id);
      })
      .catch(err => { console.log(err) })
    //.finally(() => {})
  }


  function logout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCurrentUser({ name: '', email: '' });
    //console.log(currentUser)
    console.log(loggedIn)
  }

  return (
    <div className="page">


      <>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/signup">
              <Register
                handleRegistration={handleRegistration}
              />
            </Route>

            <Route path="/signin">
              <Login
                handleLogin={handleLogin}
              />
            </Route>
            {isUserChecked ?
              <ProtectedRoute path="/profile" loggedIn={loggedIn} >
                <Profile logout={logout} onUpdateUserInfo={handleUpdateUserInfo} />
              </ProtectedRoute> : null}
            {isUserChecked ?
              <ProtectedRoute path="/movies" loggedIn={loggedIn} >
                <Movies
                  isLoading={isLoading}
                  onFindMovies={handleSearchMovies}
                  allMovies={allMovies}
                  movies={foundMovies}
                  onSaveMovie={handleAddMovieToSaved}
                  onDeleteMovie={handleDeleteSavedMovie}
                  savedMovies={savedMovies}
                  //onLiked={isLiked}
                  isError={isError}
                  isNothingFound={isNothingFound}
                />
              </ProtectedRoute> : null}
            {isUserChecked ?
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} >
                <SavedMovies
                  isLoading={isLoading}
                  onFindMovies={handleSearchSavedMovies}
                  allMovies={allMovies}
                  movies={savedMovies}
                  foundMoviesInSavedMovies={foundMoviesInSavedMovies}
                  onMovieSearch={isMovieSearch}
                  onDeleteMovie={handleDeleteSavedMovie}
                  isError={isError}
                  isNothingFound={isNothingFound}
                //savedMovies={savedMovies}
                />
              </ProtectedRoute> : null}
            <Route path="*">
              <PageNotFound />
            </Route>

          </Switch>

          <Footer />
        </ CurrentUserContext.Provider>
      </>






    </div>
  );
}

export default App;
