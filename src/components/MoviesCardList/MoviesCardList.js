import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies-list movies-list_type_saved">
        {props.movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie} />))}
      </ul>
    </section>
  )
}

export default MoviesCardList;
