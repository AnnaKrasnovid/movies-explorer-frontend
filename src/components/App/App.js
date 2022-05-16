import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
import { handleFoundMovies } from '../../utils/utils';

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [checkbox, setCheckbox] = React.useState(false);


  function handleRequest(query) {
    setIsLoading(true)
    apiMovies.getFoundMovies(query)
      .then((movies) => {
        const filteredMovies = handleFoundMovies(query, movies, checkbox)
        setFoundMovies(filteredMovies)
      })
      .catch(err => { console.log(err) })
      .finally(() => {
        setIsLoading(false)
      })
  }


function handleCheckbox() {
  if (checkbox === false) {
    setCheckbox(true)

    //console.log(checkbox)
  } else {
    setCheckbox(false)
    //console.log(checkbox)
  }
}




  /*function duration(data) {
    const time = arrOb.filter(data => {
       if(data.duration < 60) {
      return console.log('yes')
    } else {
      return console.log('no')
    }
    })
   data.duration ? < 60
  }*/

  return (
    <div className="page">


        <>
          <Header />
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/signup">
              <Register />
            </Route>

            <Route path="/signin">
              <Login />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/movies">
              <Movies
                onCheckbox={handleCheckbox}

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
        </>


    </div>
  );
}

export default App;
