import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <div className="search__box">
          <div className="search__box-search">
            <div className="search__magnifier"></div>
            <input className="search__input" type="text" placeholder="Фильм"></input>
          </div>
          <button className="search__button hover-button" type="submit"></button>
        </div>
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
