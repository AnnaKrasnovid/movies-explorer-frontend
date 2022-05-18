import './App.css';
import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
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
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [isUserChecked, setIsUserChecked] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.checkToken(token)
        .then((data) => {
          setLoggedIn(true);
          setIsUserChecked(true);
          //console.log(loggedIn);
        })
        .catch((err) => {
          setIsUserChecked(true);
          //console.log(err)
        })
    }
  }, [])

  React.useEffect(() => {
    //setIsLoading(true)
    if (loggedIn) {
      //const token = localStorage.getItem('token');
      apiMain.getProfileInfo()
        .then((data) => {
          setCurrentUser({ name: data.name, email: data.email })
          setLoggedIn(true)
          //console.log(loggedIn)
        })
        .catch(err => {
          console.log(err)
        })
      //.finally(() => setIsLoading(false))
    }
  }, [loggedIn])



  function handleRegistration(data) {
    auth.register(data)
      .then((data) => {
        history.push("/signin")
      })
      .catch(err => {
        console.log(err)
      })
    //.finally(() => )
  }

  function handleLogin(data) {
    auth.authorize(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        //console.log(currentUser)
        history.push("/movies");
        console.log(loggedIn)
      })
      .catch(err => {

        console.log(err)
      })
  }

  function handleRequestSearch(query, stateCheckbox) {
    setIsLoading(true)
    apiMovies.getFoundMovies(query)
      .then((movies) => {
        const filteredMovies = handleFoundMovies(query, movies, stateCheckbox)
        setFoundMovies(filteredMovies)
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUpdateUserInfo(name, email) {
    apiMain.updateProfileInfo(name, email)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch(err => { console.log(err) })
    /*.finally(() => {

    })*/
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
                  onFindMovies={handleRequestSearch}
                  movies={foundMovies}
                /* isLoading={isLoading}*/
                />
              </ProtectedRoute> : null}
            {isUserChecked ?
              <ProtectedRoute path="/saved-movies" Component={SavedMovies} loggedIn={loggedIn} >
                <SavedMovies />
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
