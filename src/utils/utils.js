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

