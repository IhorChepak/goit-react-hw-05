import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWVhMDNiMWJlZDlhNGU2ZjRlNTIzZTUyMTY4MzNjYyIsIm5iZiI6MTczNjQzNjM0Ni4xOTI5OTk4LCJzdWIiOiI2NzdmZWE3YWVlODRmYTRkZWY3YWVkNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VMmalfrNwCxM8X4gN7myxgoi80Ey_XEsSmkc5UVBMo0",
  },
};

export const getMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const getMovieById = async (movieId) => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const getCredits = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const getReviews = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return data.results;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.results;
};