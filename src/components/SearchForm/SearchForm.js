import React from 'react';
import './SearchForm.css';
//import useInput from '../../hooks/useInput';
import useFormValidation from '../../hooks/useFormValidation';
import { useLocation } from 'react-router-dom';

function SearchForm(props) {
  const [checkbox, setCheckbox] = React.useState(localStorage.getItem('stateCheckbox') === 'true');
  //const [checkboxSavedMovies, setCheckboxSavedMovies] = React.useState(localStorage.getItem('stateCheckbox') === 'true');
  const [isEmptyRequest, setIsEmptyRequest] = React.useState(false);
  const location = useLocation();

  const locationMovies = location.pathname === '/movies';

  const { values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setErrors,
    setIsValid
  } = useFormValidation();

  function handleCheckbox(e) {
    const stateCheckbox = e.target.checked;
    setCheckbox(stateCheckbox);
    // localStorage.setItem('stateCheckbox', stateCheckbox);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      setIsEmptyRequest(false);
    } else {
      setIsEmptyRequest(true);
      return;
    }

    props.onFindMovies(values.search, checkbox);

    if (locationMovies) {
      localStorage.setItem('query', values.search);
      localStorage.setItem('stateCheckbox', checkbox);
    }
  }

  React.useEffect(() => { //
    if (localStorage.getItem('query') && localStorage.getItem('stateCheckbox') && locationMovies) {
      const inputSearch = localStorage.getItem('query');
      const checkbox = JSON.parse(localStorage.getItem('stateCheckbox'));
      setValues({ search: inputSearch });
      setIsValid(true);
      setCheckbox(checkbox);
    }
  }, [])

  return (
    <section className="search">
      <span id="search-input-error" className={`search__error ${(isEmptyRequest && !isValid) ? 'search__error_active' : ''}`}>Нужно ввести ключевое слово</span>
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
              required
              value={values.search || ''}
              onChange={handleChange}
            />
          </div>
          <button className="search__button hover-button" type="submit" ></button>

        </form>
        <div className="search__box-checkbox">
          <label className="search__checkbox">
            {locationMovies ? (
              <input className="search__checkbox-input" type="checkbox" onChange={handleCheckbox} checked={checkbox}></input>
            ) : (
              <input className="search__checkbox-input" type="checkbox" onChange={handleCheckbox}></input>
            )
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
