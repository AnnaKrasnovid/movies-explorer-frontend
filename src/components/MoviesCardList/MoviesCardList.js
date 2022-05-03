import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <div className="movies__container">
      <ul className="movies-list">
        <MoviesCard />
      </ul>
      </div>

    </section>
  )
}

export default MoviesCardList;
