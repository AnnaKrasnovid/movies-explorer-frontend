import React from 'react';
import './SearchForm.css';
import useFormValidation from '../../hooks/useFormValidation';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
  const { values, handleChange, isValid, setValues, setIsValid } = useFormValidation();

  const location = useLocation();
  const locationMovies = location.pathname === '/movies';

  const stateCheckboxMovies = locationMovies ? localStorage.getItem('stateCheckbox') === 'true' : false;
  const [checkbox, setCheckbox] = React.useState(stateCheckboxMovies);

  const [isEmptyRequest, setIsEmptyRequest] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('query') && localStorage.getItem('stateCheckbox') && locationMovies) {
      const inputSearch = localStorage.getItem('query');
      const checkbox = JSON.parse(localStorage.getItem('stateCheckbox'));
      setValues({ search: inputSearch });
      setIsValid(true);
      setCheckbox(checkbox);
    }
  }, [])

  function handleCheckbox() {
    setCheckbox(!checkbox);
    console.log(!checkbox)
    handleSubmitСheckbox();
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      setIsEmptyRequest(true);
      return;
    } else {
      setIsEmptyRequest(false);
    }
    props.onFindMovies(values.search, checkbox);
  }

  function handleSubmitСheckbox() {
    props.onFindMovies(values.search, !checkbox);
  }

  return (
    <section className="search">

      <span
        id="search-input-error"
        className={`search__error ${(isEmptyRequest && !isValid) ? 'search__error_active' : ''}`}>
        Нужно ввести ключевое слово
      </span>
      <div className="search__container">

        <form className="search__box" onSubmit={(e) => handleSubmit(e)} noValidate>
          <div className="search__box-search">
            <div className="search__magnifier"></div>
            <input
              id="search"
              name="search"
              className="search__input"
              type="text"
              placeholder="Фильм"
              value={values.search || ''}
              onChange={handleChange}
            />
          </div>
          <button className="search__button hover-button" type="submit" disabled={isEmptyRequest && !isValid}></button>
        </form>

        <div className="search__box-checkbox">
          <label className="search__checkbox">
            {locationMovies ?
              <input
                name="checkbox"
                value={values.checkbox}
                className="search__checkbox-input"
                type="checkbox"
                onChange={handleCheckbox}
                checked={checkbox}
                disabled={!isValid}
              />
              :
              <input
                name="checkbox"
                value={values.checkbox}
                className="search__checkbox-input"
                type="checkbox" onChange={handleCheckbox}
                checked={checkbox}
                disabled={!isValid}
              />
            }
            <span className="search__checkbox-slider"></span>
          </label>
          <p className="search__checked-title">Короткометражки</p>
        </div>

      </div>


    </section>
  )
}

export default SearchForm;
