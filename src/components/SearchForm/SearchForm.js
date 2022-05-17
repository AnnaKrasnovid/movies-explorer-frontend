import React from 'react';
import './SearchForm.css';
//import useInput from '../../hooks/useInput';
import useFormValidation from '../../hooks/useFormValidation';
//import { useEffect } from 'react';

function SearchForm(props) {
  const [isDirty, setIsDirty] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(false);

  const { values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setErrors,
    setIsValid
  } = useFormValidation();

  function onBlur() {
    setIsDirty(true)
  }

  function handleCheckbox() {
    if (checkbox === false) {
      setCheckbox(true)
    } else {
      setCheckbox(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onFindMovies(values.search, checkbox)
  }

  return (
    <section className="search">
      <span id="search-input-error" className={`search__error ${(!isValid && isDirty) ? 'search__error_active' : ''}`}>Нужно ввести ключевое слово</span>
      <div className="search__container">
        <form className="search__box" onSubmit={(e) =>handleSubmit(e)} noValidate>
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
              onBlur={onBlur}
            />
          </div>
          <button className="search__button hover-button" type="submit" disabled={!isValid}></button>
        </form>
        <div className="search__box-checkbox">
          <label className="search__checkbox">
            <input className="search__checkbox-input" type="checkbox" onChange={handleCheckbox} ></input>
            <span className="search__checkbox-slider" ></span>
          </label>
          <p className="search__checked-title">Короткометражки</p>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
/*const inputSearch = useInput('', {isEmpty: true, minLength: 2})

  return (
    <section className="search">
      <span id="search-input-error" className="search__error">{inputSearch.isEmpty  && inputSearch.isDirty ? 'Нужно ввести ключевое слово' : ''}</span>
      <div className="search__container">
        <form className="search__box" onSubmit={props.onFindMovies} noValidate>
          <div className="search__box-search">
            <div className="search__magnifier"></div>
            <input
              id="search-input"
              name="search-input"
              className="search__input"
              type="text"
              placeholder="Фильм"
              required
              minLength="2"
              value={inputSearch.value || ''}
              onChange={e => inputSearch.onChange(e)}
              onBlur={e => inputSearch.onBlur(e)}
            />
          </div>
          <button className="search__button hover-button" type="submit"  disabled={inputSearch.inputValid}></button>
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
  )*/
