import axios from "axios";

export const fetchSearchMovies = async (query) => {
  const options = {
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWFiNmVlMWIxMWY3YTU1NTE1ZjJlM2VjOTU3ODEwOSIsInN1YiI6IjY2MThhNmRjZGQ3MzFiMDE3ZTBhNzc4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kh7iyGuOTiR1aOOphPyNYmmIisRSkt1wbVvU-jmBWr0",
    },
  };

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    options
  );
  return data;
};
