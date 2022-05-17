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

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  //const [isSuccessSignUp, setSuccessSignUp] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});
  const history = useHistory();

  function handleRequest(query, stateCheckbox) {
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

  function handleRegistration(data) {
    auth.register(data)
      .then((data) => {
        console.log(data)
        history.push("/signin")
      })
      .catch(err => {
        //setSuccessSignUp(false)
        console.log(err)
      })
    //.finally(() => )
  }

  function handleLogin(data) {
    auth.authorize(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        console.log(currentUser)
        history.push("/movies");
      })
      .catch(err => {
        // setSuccessSignUp(false)
        console.log(err)
      })
  }

  React.useEffect(() => {
    setIsLoading(true)

    if(loggedIn) {
      apiMain.getProfileInfo()
      .then((data) => {
        setLoggedIn(true)
        setCurrentUser(data)


        console.log(data)
        console.log(data.name)
        console.log(currentUser)
      })
      .catch(err => {
        // setSuccessSignUp(false)
        console.log(err)
      })
      .finally(() => setIsLoading(false))
    }

  }, [loggedIn])

  return (
    <div className="page">


      <>
      <CurrentUserContext.Provider value={ currentUser }>
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




            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/movies">
              <Movies
                onFindMovies={handleRequest}
                movies={foundMovies}
                isLoading={isLoading}
              />
            </Route>

            <Route path="/saved-movies">
              <SavedMovies />
            </Route>


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
