export function handleFoundMovies(query, movies, stateCheckbox) {
  const keyword = query.toLowerCase();

  if (stateCheckbox === true) {
    const moviesFilter = movies.filter(item => {
      const stringRU = String(item.nameRU.toLowerCase());
      //const stringEN = String(item.nameEN.toLowerCase());
      const search = stringRU.includes(keyword) && item.duration < 40 //|| stringEN.includes(keyword);
      return search;
    })
    return moviesFilter;
  } else {
    const moviesFilter = movies.filter(item => {
      const stringRU = String(item.nameRU.toLowerCase());
      //const stringEN = String(item.nameEN.toLowerCase());
      const search = stringRU.includes(keyword) // || stringEN.includes(keyword);
      return search;
    })
    return moviesFilter;
  }
}

export function handleDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - (60 * hours);
  return `${hours}ч ${minutes}м`;
}

export function sortingArrayId (savedMovies, movie) {
  /*const arrMoviesId = []
  props.savedMovies.map(item => arrMoviesId.push(item.movieId))
  const stringIdMovies = String(arrMoviesId)
  const like = stringIdMovies.includes(movie.id)
  return like*/
  const arrMoviesId = [];
  savedMovies.map(item => arrMoviesId.push(item.movieId));
  const stringIdMovies = String(arrMoviesId);
  const like = stringIdMovies.includes(movie.id);
  return like;
}


/* function handleSearch(query, movies) {
  const moviesFilter = movies.filter(item => {
    const keyword = query.toLowerCase();
    const stringRU = String(item.nameRU.toLowerCase());
    //const stringEN = String(item.nameEN.toLowerCase());
    const search = stringRU.includes(keyword);
    console.log(search)
    return search;
  })
  //console.log(moviesFilter)
  return moviesFilter;
}

function handlerMovieDuration(movies) {
  const duration = movies.filter(data => data.duration < 40)
  console.log(duration)
  return duration
} */

