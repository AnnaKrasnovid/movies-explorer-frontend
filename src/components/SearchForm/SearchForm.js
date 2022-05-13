import React from 'react';
import './SearchForm.css';

function SearchForm(props) {

  /*const [searchMovies, setSearchMovies] = React.useState('');
  const [emptyRequestSearchMovies, setEmptyRequestSearchMovies] = React.useState('');

  function handleEmptyRequestSearch(e) {
    setSearchMovies(e.target.value)
    if(e.target.value.length = 0) {
      setEmptyRequestSearchMovies
      ('Нужно ввести ключевое слово');
      console.log('Нужно ввести ключевое слово')
    }
  }*/

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__box" onSubmit={props.onFindMovies}>
          <div className="search__box-search">
            <div className="search__magnifier"></div>
            <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            required
            /*value={searchMovies || ''}
            onChange={handleEmptyRequestSearch}*/
            />

          </div>
          <button className="search__button hover-button" type="submit"></button>
        </form>
        <div className="search__box-checkbox">
          <label className="search__checkbox">
            <input className="search__checkbox-input" type="checkbox"></input>
            <span className="search__checkbox-slider"></span>
          </label>
          <p className="search__checked-title">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
