import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <input className="search__input" type="text" placeholder="Фильм"></input>
        <div className="search__magnifier"></div>
      </div>

    </section>
  )
}

export default SearchForm;
