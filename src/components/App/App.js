import './App.css';
import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
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
  const history = useHistory();
  const location = useLocation();
  const locationMovies = location.pathname === '/movies';

  const [isLoading, setIsLoading] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [foundMoviesInSavedMovies, setFoundMoviesInSavedMovies] = React.useState([]);

  const [isMovieSearch, setIsMovieSearch] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false); // вошедший в систему
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });

  //проверка наличия пользователя, если есть то переходит в защщищенные роуты
  const [isUserChecked, setIsUserChecked] = React.useState(false);

  const [isError, setIsError] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(false);

  const [isErrorSavedMovies, setIsErrorSavedMovies] = React.useState(false);
  const [isNothingFoundSavedMovies, setIsNothingFoundSavedMovies] = React.useState(false);

  const [errorStatusCodeRegistration, setErrorStatusCodeRegistration] = React.useState('');
  const [isSuccessfulRegistration, setIsSuccessfulRegistration] = React.useState(false);

  const [errorStatusCodeLogin, setErrorStatusCodeLogin] = React.useState('');
  const [isSuccessfulLogin, setIsSuccessfulLogin] = React.useState(false);

  const [errorStatusCodeProfile, setErrorStatusCodeProfile] = React.useState('');
  const [isSuccessfulUpdateProfile, setIsSuccessfulUpdateProfile] = React.useState(false);

  const [isErrorProfile, setIsErrorProfile] = React.useState(false);

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
          console.log(err);
        })
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      apiMain.getProfileInfo()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
          setIsUserChecked(true);
        })
        .catch(err => {
          console.log(err);
          setIsUserChecked(true);
        })
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      apiMain.getSavedMoviesList()
        .then((savedMovies) => {
          const savedMoviesCurrentUser = savedMovies.filter(movie => movie.owner === currentUser._id);
          setSavedMovies(savedMoviesCurrentUser);
          setIsErrorSavedMovies(false);
          setIsUserChecked(true);
        })
        .catch(err => {
          console.log(err);
          setIsErrorSavedMovies(true);
          setIsUserChecked(true);
        })
    }
  }, [loggedIn, currentUser, isDelete]);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('movies')) && locationMovies) {
      const films = JSON.parse(localStorage.getItem('movies'));

      if (films.length !== 0) {
        setFoundMovies(films);
      }
      else {
        setIsNothingFound(true);
      }
    }
  }, [locationMovies]);

  function handleRegistration(data) {
    auth.register(data)
      .then(() => {
        setIsSuccessfulRegistration(true);
        history.push("/signin");
      })
      .catch(err => {
        console.log(err);
        setErrorStatusCodeRegistration(err);
        setIsSuccessfulRegistration(false);
      })
  }

  function handleLogin(data) {
    auth.authorize(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        setIsSuccessfulLogin(true);
        history.push("/movies");
      })
      .catch(err => {
        console.log(err);
        setErrorStatusCodeLogin(err);
      })
  }

  function handleUpdateUserInfo(name, email) {
    apiMain.updateProfileInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setIsErrorProfile(false);
        setIsSuccessfulUpdateProfile(true);
      })
      .catch(err => {
        console.log(err);
        setErrorStatusCodeProfile(err);
        setIsSuccessfulUpdateProfile(false);
        setIsErrorProfile(true);
      })
  }

  function handleSearchMovies(query, stateCheckbox) {
    setIsLoading(true)
    apiMovies.getFoundMovies(query)
      .then((movies) => {
        setAllMovies(movies);
        const filteredMovies = handleFoundMovies(query, movies, stateCheckbox);
        setFoundMovies(filteredMovies);
        checkFoundMoviesLength(filteredMovies, setIsNothingFound);
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

  function handleSearchSavedMovies(query, stateCheckbox) {
    setIsLoading(true)
    apiMain.getSavedMoviesList()
      .then((savedMovies) => {
        setIsMovieSearch(true);
        const savedMoviesCurrentUser = savedMovies.filter(movie => movie.owner === currentUser._id);
        const filteredMovies = handleFoundMovies(query, savedMoviesCurrentUser, stateCheckbox);
        setFoundMoviesInSavedMovies(filteredMovies);
        checkFoundMoviesLength(filteredMovies, setIsNothingFoundSavedMovies);
        console.log(filteredMovies);
        setIsErrorSavedMovies(false);
      })
      .catch(err => {
        console.log(err);
        setIsErrorSavedMovies(true);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function checkFoundMoviesLength(movies, stateIsNothingFound) {
    if (movies.length === 0) {
      stateIsNothingFound(true);
    } else {
      stateIsNothingFound(false);
    }
  }

  function handleAddMovieToSaved(newMovie) {
    apiMain.addMovieToSaved(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        setIsError(false);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      })
  }

  function handleDeleteSavedMovie(movie) {
    setIsDelete(true)
    apiMain.deleteMovieLike(movie)
      .then((movie) => {
        setSavedMovies((cards) => cards.filter((m) => (m._id !== movie._id)));
        console.log(movie._id);
      })
      .catch(err => { console.log(err) })
      .finally(() => { setIsDelete(false) })
  }

  function logout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('stateCheckbox');
    localStorage.removeItem('query');
    setCurrentUser({ name: '', email: '' });
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
                errorStarusCode={errorStatusCodeRegistration}
                isSuccessfulRequest={isSuccessfulRegistration}
              />
            </Route>

            <Route path="/signin">
              <Login
                handleLogin={handleLogin}
                errorStarusCode={errorStatusCodeLogin}
                isSuccessfulRequest={isSuccessfulLogin}
              />
            </Route>

            {isUserChecked ?
              <ProtectedRoute path="/profile" loggedIn={loggedIn} >
                <Profile
                  logout={logout}
                  onUpdateUserInfo={handleUpdateUserInfo}
                  errorStarusCode={errorStatusCodeProfile}
                 isErrorProfile={isErrorProfile}
                  isSuccessfulRequest={isSuccessfulUpdateProfile}
                />
              </ProtectedRoute>
              : null}

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
                  isError={isError}
                  isNothingFound={isNothingFound}
                />
              </ProtectedRoute>
              : null}

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
                  isError={isErrorSavedMovies}
                  isNothingFound={isNothingFoundSavedMovies}
                />
              </ProtectedRoute>
              : null}

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
