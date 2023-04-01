const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathname, query = "") => {
  try {
    const res = await fetch(
      `${BASE_URL}${pathname}?api_key=${process.env.MY_API_KEY}&${query}`
    );

    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getCategories = async () => {
  return fetchMovieApi(`/genre/movie/list`, `language=en-US`);
};

const getSingleCategories = async (genreId) => {
  return fetchMovieApi(`/discover/movie`, `with_genres=${genreId}`);
};

const getPopularMovies = async () => {
  return fetchMovieApi(`/movie/top_rated`, `language=en-US&page=1`);
};

const getTopRatedMovies = async () => {
  return fetchMovieApi(`/movie/top_rated`, `language=en-US&page=1`);
};

const getMovie = async (movie_id) => {
  return fetchMovieApi(`/movie/${movie_id}`, `language=en-US`);
};

export {
  fetchMovieApi,
  getCategories,
  getSingleCategories,
  getPopularMovies,
  getTopRatedMovies,
  getMovie,
};
