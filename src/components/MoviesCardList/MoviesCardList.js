import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies-list">
        <MoviesCard />
      </ul>

        <button className="movies__button-more">Ещё</button>

    </section>
  )
}

export default MoviesCardList;
