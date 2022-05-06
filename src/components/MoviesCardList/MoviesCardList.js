import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies-list movies-list_type_saved">
        <MoviesCard />
      </ul>
    </section>
  )
}

export default MoviesCardList;
