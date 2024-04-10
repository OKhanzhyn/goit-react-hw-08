import axios from "axios";

const options = (url, query) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/${url}`,
    params: { query: `${query}`, include_adult: "false", language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTNmZTgyNmFmOWRiMDI0YjYxNTVlNmY5MTYyNDc2MSIsInN1YiI6IjY2MTZkN2NjMjljNjI2MDE3Y2EyMDQxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DrIi858538Q5w99lq4Tim0AxjZORejRd4rOI7g8k7t0",
    },
  };
};

export const requestMovies = async (query) => {
  const data = await axios.request(options(`3/search/multi`, query));

  return data;
};

export const requestTrendMovies = async (query) => {
  const data = await axios.request(options("3/trending/movie/day", query));

  return data;
};

export const requestMovieDetails = async (id) => {
  const data = await axios.request(options(`3/movie/${id}`));
  return data;
};

export const requestMovieCast = async (id) => {
  const data = await axios.request(options(`3/movie/${id}/credits`));
  return data;
};

export const requestMovieReviews = async (id) => {
  const data = await axios.request(options(`3/movie/${id}/reviews`));
  return data;
};
